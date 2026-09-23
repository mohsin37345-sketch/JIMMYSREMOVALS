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

const htmlFiles = getAllHtmlFiles(DIST_DIR);

if (htmlFiles.length === 0) {
  console.error('No HTML files found in dist/. Run `npm run build` first.');
  process.exit(1);
}

console.log(`--- Running Strict Compliance Verification on ${htmlFiles.length} HTML files ---`);

let errors = [];

// Banned words list
const bannedTerms = [
  'seamless',
  'hassle-free',
  'stress-free',
  'top-notch',
  'second to none',
  'world-class',
  'we pride ourselves',
  'look no further',
  'one-stop shop',
  'cutting-edge',
  'unparalleled',
  'rest assured',
  'elevate',
  'navigate the complexities',
  'near me'
];

// Insurance figures
const bannedInsurance = [
  '£50,000',
  '£50k',
  '£2,000,000',
  '£2m',
  'goods in transit',
  'public liability'
];

// CAZ forbidden claims
const forbiddenCazClaims = [
  'euro 6',
  'compliant fleet'
];

for (const file of htmlFiles) {
  const relPath = path.relative(DIST_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf-8');
  const lowerContent = content.toLowerCase();

  // Skip Astro HTML redirect stub files
  if (content.includes('http-equiv="refresh"')) {
    continue;
  }

  // Rule 1: No {{ anywhere in dist
  if (content.includes('{{')) {
    errors.push(`[Rule 1 - Placeholders] Found '{{' placeholder in ${relPath}`);
  }

  // Rule 2: No insurance figures
  for (const ins of bannedInsurance) {
    if (lowerContent.includes(ins)) {
      errors.push(`[Rule 2 - Insurance] Found '${ins}' in ${relPath}`);
    }
  }

  // Rule 3: No Euro 6 or compliant fleet claims
  for (const claim of forbiddenCazClaims) {
    if (lowerContent.includes(claim)) {
      errors.push(`[Rule 3 - CAZ Claims] Found '${claim}' in ${relPath}`);
    }
  }

  // Rule 4: No 'Quote on Request'
  if (content.includes('Quote on Request')) {
    errors.push(`[Rule 4 - Quote on Request] Found 'Quote on Request' in ${relPath}`);
  }

  // Rule 5: Banned words
  for (const term of bannedTerms) {
    // Word boundary check
    const regex = new RegExp(`\\b${term}\\b`, 'i');
    if (regex.test(content)) {
      errors.push(`[Rule 5 - Banned Words] Found banned term '${term}' in ${relPath}`);
    }
  }

  // Rule 6: 7 days a week without 24 hours
  // Look for occurrences of '7 days a week' or 'seven days a week' without '24 hours' or '24/7' nearby
  const sevenDaysMatches = content.match(/(?:7|seven) days a week/gi);
  if (sevenDaysMatches) {
    const has24Hours = /24 hours|24\/7/i.test(content);
    if (!has24Hours) {
      errors.push(`[Rule 6 - Operating Hours] Found '7 days a week' without '24 hours' in ${relPath}`);
    }
  }

  // Rule 7: CAZ only on Birmingham pages
  const isBirmingham = relPath.toLowerCase().includes('birmingham') || relPath === 'index.html';
  const isCazGuide = relPath.includes('clean-air-zone') || relPath.includes('caz');
  if (!isBirmingham && !isCazGuide) {
    if (lowerContent.includes('clean air zone') || /\bcaz\b/i.test(content)) {
      errors.push(`[Rule 7 - Non-Birmingham CAZ] Found CAZ reference on non-Birmingham page ${relPath}`);
    }
  }

  // Rule 8: 3 ImageSlot elements on removals and service pages
  const isAreaPage = relPath.startsWith('removals/') && relPath !== 'removals/index.html';
  const isServicePage = relPath.startsWith('services/') && relPath !== 'services/index.html';
  const isGuidePage = relPath.startsWith('guides/');
  
  if (isAreaPage || isServicePage || isGuidePage) {
    const heroSlot = content.includes('data-image-slot="hero"');
    const localSlot = content.includes('data-image-slot="local"');
    const teamSlot = content.includes('data-image-slot="team"');
    
    if (!heroSlot || !localSlot || !teamSlot) {
      errors.push(`[Rule 8 - ImageSlots] Page ${relPath} is missing image slots (hero:${heroSlot}, local:${localSlot}, team:${teamSlot})`);
    }
  }
}

console.log(`\nVerification Results:`);
if (errors.length === 0) {
  console.log(`ALL CHECKS PASSED: 0 compliance violations across ${htmlFiles.length} files.`);
  process.exit(0);
} else {
  console.error(`FAILED: ${errors.length} compliance violation(s) found:\n`);
  errors.slice(0, 30).forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
  if (errors.length > 30) {
    console.error(`  ... and ${errors.length - 30} more errors.`);
  }
  process.exit(1);
}
