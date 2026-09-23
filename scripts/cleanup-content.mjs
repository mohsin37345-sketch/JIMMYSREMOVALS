import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();

// Regex patterns to clean up
const replacements = [
  // Insurance
  { pattern: /up to £50,000 Goods in Transit cover on every move/gi, replacement: 'Fully insured for your move' },
  { pattern: /up to £50,000 Goods in Transit cover/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 Goods in Transit (and|&) £2,000,000 Public Liability insurance/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 Goods in Transit insurance and £2,000,000 Public Liability (cover|insurance)/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 Goods in Transit cover and £2,000,000 Public Liability insurance/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 Goods in Transit cover/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 Goods in Transit insurance/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 goods in transit insurance/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 goods in transit protection/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 transit cover/gi, replacement: 'Fully insured' },
  { pattern: /£50k Goods in Transit cover/gi, replacement: 'Fully insured' },
  { pattern: /£50k transit cover/gi, replacement: 'Fully insured' },
  { pattern: /£50,000 cover/gi, replacement: 'Fully insured' },
  { pattern: /£50,000/gi, replacement: 'Fully insured' },
  { pattern: /£50k/gi, replacement: 'Fully insured' },
  { pattern: /£2,000,000 Public Liability insurance/gi, replacement: 'Fully insured' },
  { pattern: /£2,000,000 Public Liability cover/gi, replacement: 'Fully insured' },
  { pattern: /£2,000,000/gi, replacement: 'Fully insured' },
  { pattern: /£2m/gi, replacement: 'Fully insured' },
  { pattern: /Goods in Transit/gi, replacement: 'Fully insured' },
  { pattern: /Public Liability/gi, replacement: 'Fully insured' },

  // CAZ and Euro 6 claims
  { pattern: /100% compliant Euro 6 fleet \(zero surcharge\)/gi, replacement: 'Zero CAZ surcharges on Birmingham moves' },
  { pattern: /100% compliant Euro 6 fleet/gi, replacement: 'Modern Luton fleet' },
  { pattern: /Euro 6 low-emission standards/gi, replacement: 'low-emission standards' },
  { pattern: /Euro 6 ULEZ and CAZ compliant/gi, replacement: 'modern' },
  { pattern: /Euro 6 Clean Air Zone Compliant Fleet/gi, replacement: 'Modern Luton Van Fleet' },
  { pattern: /Euro 6 compliant fleet/gi, replacement: 'modern fleet' },
  { pattern: /Euro 6 compliant/gi, replacement: 'modern' },
  { pattern: /Euro 6/gi, replacement: 'modern' },
  { pattern: /compliant fleet/gi, replacement: 'modern fleet' },
  { pattern: /completely exempt from Birmingham CAZ charges, so zero clean air fees are added/gi, replacement: 'zero CAZ charges are added to your quote' },
  { pattern: /fully exempt from the Birmingham Clean Air Zone charge\. We never add CAZ surcharges/gi, replacement: 'we never add Clean Air Zone surcharges to your quote' },
  { pattern: /with complete exemption from CAZ fees/gi, replacement: 'with zero CAZ charges added to your quote' },

  // Banned phrases
  { pattern: /\bseamless and stress-free\b/gi, replacement: 'smooth and organized' },
  { pattern: /\bseamless\b/gi, replacement: 'smooth' },
  { pattern: /\bhassle-free\b/gi, replacement: 'straightforward' },
  { pattern: /\bstress-free\b/gi, replacement: 'organized' },
  { pattern: /\btop-notch\b/gi, replacement: 'dependable' },
  { pattern: /\bsecond to none\b/gi, replacement: 'professional' },
  { pattern: /\bwe pride ourselves on\b/gi, replacement: 'we deliver' },
  { pattern: /\bwe pride ourselves\b/gi, replacement: 'we focus on' },
  { pattern: /\blook no further\b/gi, replacement: 'call our team' },
  { pattern: /\bone-stop shop\b/gi, replacement: 'complete removals service' },
  { pattern: /\bcutting-edge\b/gi, replacement: 'modern' },
  { pattern: /\bunparalleled\b/gi, replacement: 'dedicated' },
  { pattern: /\brest assured\b/gi, replacement: 'you can be confident' },
  { pattern: /\belevate\b/gi, replacement: 'improve' },
  { pattern: /\bnavigate the complexities\b/gi, replacement: 'handle the logistics' },
  { pattern: /\bnear me\b/gi, replacement: 'locally' },
  { pattern: /\bpremium\b/gi, replacement: 'professional' },
  { pattern: /\bworld-class\b/gi, replacement: 'experienced' },
  
  // Operating hours
  { pattern: /operate seven days a week/gi, replacement: 'operate 24 hours, 7 days a week' },
  { pattern: /seven days a week/gi, replacement: '24 hours, 7 days a week' },
  { pattern: /7 days a week(?!\s*,\s*24 hours|\s*24\/7)/gi, replacement: '24 hours, 7 days a week' },

  // Quote on Request
  { pattern: /Quote on Request/gi, replacement: 'Get a Fixed Quote' }
];

function sanitizeContent(content, filePath) {
  let updated = content;
  
  // Check if non-Birmingham location file
  const isLocationJson = filePath.includes(path.join('src', 'content', 'locations'));
  const isBirmingham = filePath.toLowerCase().includes('birmingham');
  
  for (const { pattern, replacement } of replacements) {
    updated = updated.replace(pattern, replacement);
  }

  // Non-Birmingham files: remove CAZ completely
  if (isLocationJson && !isBirmingham) {
    // If cleanAirZone object exists in JSON, make sure it's disabled or empty note
    if (filePath.endsWith('.json')) {
      try {
        const parsed = JSON.parse(updated);
        if (parsed.cleanAirZone) {
          parsed.cleanAirZone = { enabled: false, note: '' };
        }
        if (parsed.localFaqs && Array.isArray(parsed.localFaqs)) {
          parsed.localFaqs = parsed.localFaqs.filter(faq => 
            !faq.question.toLowerCase().includes('clean air zone') &&
            !faq.question.toLowerCase().includes('caz') &&
            !faq.answer.toLowerCase().includes('clean air zone') &&
            !faq.answer.toLowerCase().includes('caz')
          );
        }
        updated = JSON.stringify(parsed, null, 2);
      } catch (e) {
        // Not pure json or regex modified
      }
    }
  }

  return updated;
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        processDirectory(fullPath);
      }
    } else if (entry.isFile() && (fullPath.endsWith('.json') || fullPath.endsWith('.astro') || fullPath.endsWith('.ts') || fullPath.endsWith('.md'))) {
      const original = fs.readFileSync(fullPath, 'utf-8');
      const sanitized = sanitizeContent(original, fullPath);
      if (sanitized !== original) {
        fs.writeFileSync(fullPath, sanitized, 'utf-8');
        console.log(`Sanitized: ${path.relative(ROOT_DIR, fullPath)}`);
      }
    }
  }
}

console.log('Sanitizing content directories...');
processDirectory(path.join(ROOT_DIR, 'src', 'content'));
processDirectory(path.join(ROOT_DIR, 'src', 'data'));
processDirectory(path.join(ROOT_DIR, 'src', 'pages'));
console.log('Finished sanitizing content.');
