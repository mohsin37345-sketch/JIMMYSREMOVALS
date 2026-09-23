import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.join(process.cwd(), 'dist');

function getAllHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

// Extract main content, excluding header, nav, footer, script, style, forms, aside, and boilerplate
function extractContentText(html) {
  let content = html;
  
  // Remove script and style tags
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
  content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
  
  // Remove header, nav, footer, aside, and form
  content = content.replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, ' ');
  content = content.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, ' ');
  content = content.replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, ' ');
  content = content.replace(/<aside\b[^<]*(?:(?!<\/aside>)<[^<]*)*<\/aside>/gi, ' ');
  content = content.replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, ' ');

  // Extract <main> content if present
  const mainMatch = content.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) content = mainMatch[1];
  
  // Remove elements with data-nosimilarity attribute (per prompt instruction)
  let prev;
  do {
    prev = content;
    content = content.replace(/<([a-z0-9]+)[^>]*\bdata-nosimilarity\b[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  } while (content !== prev);

  // Remove pricing tables and NAP blocks (boilerplate company facts across all pages)
  content = content.replace(/<table\b[^<]*(?:(?!<\/table>)<[^<]*)*<\/table>/gi, ' ');
  content = content.replace(/Business Verification & Registered Office[\s\S]*?Open 24 hours, 7 days a week\./gi, ' ');
  content = content.replace(/Open 24 hours, 7 days a week\s*·\s*DBS-checked crews\s*·\s*Fixed quotes\s*·\s*Fully insured/gi, ' ');

  // Remove HTML tags
  content = content.replace(/<[^>]+>/g, ' ');
  
  // Normalize whitespace and lowercase
  content = content.replace(/\s+/g, ' ').trim().toLowerCase();
  return content;
}

// Generate 5-word shingles
function getShingles(text, k = 5) {
  const words = text.split(' ').filter(w => w.length > 0);
  const shingles = new Set();
  for (let i = 0; i <= words.length - k; i++) {
    shingles.add(words.slice(i, i + k).join(' '));
  }
  return shingles;
}

// Compute Jaccard similarity: |A ∩ B| / |A ∪ B|
function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersectionSize = 0;
  for (const item of setA) {
    if (setB.has(item)) intersectionSize++;
  }
  const unionSize = setA.size + setB.size - intersectionSize;
  return unionSize === 0 ? 0 : intersectionSize / unionSize;
}

console.log('--- Checking Content Similarity Across Dist Pages ---');

const htmlFiles = getAllHtmlFiles(DIST_DIR)
  // Filter for area pages, service pages, and service x area pages
  .filter(file => {
    const rel = path.relative(DIST_DIR, file).replace(/\\/g, '/');
    return (rel.startsWith('removals/') || rel.startsWith('services/')) &&
      rel !== 'removals/index.html' &&
      rel !== 'services/index.html';
  });

console.log(`Found ${htmlFiles.length} pages to compare.`);

if (htmlFiles.length < 2) {
  console.log('Not enough pages to compare. Build first with `npm run build`.');
  process.exit(0);
}

const pageData = htmlFiles.map(file => {
  const rel = path.relative(DIST_DIR, file).replace(/\\/g, '/');
  const rawHtml = fs.readFileSync(file, 'utf-8');
  const text = extractContentText(rawHtml);
  const shingles = getShingles(text, 5);
  return { file: rel, shingles };
});

const pairs = [];
let maxSimilarity = 0;
let highestPair = null;

for (let i = 0; i < pageData.length; i++) {
  for (let j = i + 1; j < pageData.length; j++) {
    const sim = jaccardSimilarity(pageData[i].shingles, pageData[j].shingles);
    pairs.push({
      pageA: pageData[i].file,
      pageB: pageData[j].file,
      similarity: sim
    });
    if (sim > maxSimilarity) {
      maxSimilarity = sim;
      highestPair = { pageA: pageData[i].file, pageB: pageData[j].file, sim };
    }
  }
}

// Sort descending by similarity
pairs.sort((a, b) => b.similarity - a.similarity);

console.log('\nTop 10 Most Similar Page Pairs:');
const top10 = pairs.slice(0, 10);
top10.forEach((p, idx) => {
  const pct = (p.similarity * 100).toFixed(2);
  console.log(`  ${idx + 1}. [${pct}%] ${p.pageA} <--> ${p.pageB}`);
});

const THRESHOLD = 0.25; // 25% max overlap allowed
console.log(`\nMaximum Similarity: ${(maxSimilarity * 100).toFixed(2)}%`);
if (maxSimilarity >= THRESHOLD) {
  console.error(`\nFAILED: Maximum similarity ${(maxSimilarity * 100).toFixed(2)}% exceeds limit of ${THRESHOLD * 100}%.`);
  console.error(`Culprit: ${highestPair.pageA} vs ${highestPair.pageB}`);
  process.exit(1);
} else {
  console.log(`\nPASSED: All page pairs have similarity below 25% threshold.`);
  process.exit(0);
}
