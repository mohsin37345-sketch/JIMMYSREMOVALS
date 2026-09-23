import fs from 'node:fs';
import path from 'node:path';

interface LocationData {
  town: string;
  slug: string;
  intro: string;
  localKnowledge: string;
  localFaqs: Array<{ question: string; answer: string }>;
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function getWordSet(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2);
  return new Set(words);
}

function computeSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const word of setA) {
    if (setB.has(word)) {
      intersection++;
    }
  }
  // Dice coefficient: 2 * |A ∩ B| / (|A| + |B|)
  return (2 * intersection) / (setA.size + setB.size);
}

const locationsDir = path.resolve(process.cwd(), 'src/content/locations');

if (!fs.existsSync(locationsDir)) {
  console.error(`Validation Error: Directory ${locationsDir} does not exist.`);
  process.exit(1);
}

function getAllJsonFiles(dir: string): string[] {
  let entries: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      entries = entries.concat(getAllJsonFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.json')) {
      entries.push(fullPath);
    }
  }
  return entries;
}

const files = getAllJsonFiles(locationsDir);

if (files.length === 0) {
  console.error('Validation Error: No location files found in src/content/locations.');
  process.exit(1);
}

console.log(`Checking ${files.length} location entries in ${locationsDir}...`);

const locations: LocationData[] = [];
let hasErrors = false;

for (const filePath of files) {
  const file = path.relative(locationsDir, filePath);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw) as LocationData;
    locations.push(data);

    // Guardrail 1: intro must be at least 100 words
    const introWordCount = countWords(data.intro || '');
    if (introWordCount < 100) {
      console.error(
        `[FAIL] Location '${data.town}' (${file}) intro has only ${introWordCount} words (minimum required: 100).`
      );
      hasErrors = true;
    }

    // Guardrail 2: at least 4 FAQs
    const faqCount = Array.isArray(data.localFaqs) ? data.localFaqs.length : 0;
    if (faqCount < 4) {
      console.error(
        `[FAIL] Location '${data.town}' (${file}) has only ${faqCount} local FAQs (minimum required: 4).`
      );
      hasErrors = true;
    }
  } catch (err) {
    console.error(`[ERROR] Parsing failed for ${file}:`, err);
    hasErrors = true;
  }
}

// Guardrail 3: pairwise text similarity between all location bodies must not exceed 60%
for (let i = 0; i < locations.length; i++) {
  for (let j = i + 1; j < locations.length; j++) {
    const locA = locations[i]!;
    const locB = locations[j]!;

    const textA = `${locA.intro} ${locA.localKnowledge}`;
    const textB = `${locB.intro} ${locB.localKnowledge}`;

    const similarity = computeSimilarity(getWordSet(textA), getWordSet(textB));

    if (similarity > 0.6) {
      console.error(
        `[FAIL] Near-duplicate content detected between '${locA.town}' and '${locB.town}': similarity ${(similarity * 100).toFixed(1)}% exceeds 60% threshold.`
      );
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\nContent validation FAILED. Correct errors above before proceeding.');
  process.exit(1);
}

console.log(`Content validation PASSED: all ${locations.length} locations meet word count, FAQ count, and uniqueness criteria.`);
