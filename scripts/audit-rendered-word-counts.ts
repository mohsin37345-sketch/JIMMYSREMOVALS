import fs from 'node:fs';
import path from 'node:path';

function getVisibleText(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countWords(str: string): number {
  return str.split(/\s+/).filter(Boolean).length;
}

const distDir = path.resolve('dist');

// 1. Homepage
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  const text = getVisibleText(fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8'));
  console.log('Homepage word count:', countWords(text));
}

// 2. Sample service page
const sampleService = path.join(distDir, 'removals', 'house-removals', 'index.html');
if (fs.existsSync(sampleService)) {
  const text = getVisibleText(fs.readFileSync(sampleService, 'utf-8'));
  console.log('Sample Service (house-removals) word count:', countWords(text));
}

// 3. Sample Tier 1 location
const sampleTier1 = path.join(distDir, 'areas', 'birmingham', 'index.html');
if (fs.existsSync(sampleTier1)) {
  const text = getVisibleText(fs.readFileSync(sampleTier1, 'utf-8'));
  console.log('Sample Tier 1 (birmingham) word count:', countWords(text));
}

// 4. Sample Tier 2 location
const sampleTier2 = path.join(distDir, 'areas', 'erdington', 'index.html');
if (fs.existsSync(sampleTier2)) {
  const text = getVisibleText(fs.readFileSync(sampleTier2, 'utf-8'));
  console.log('Sample Tier 2 (erdington) word count:', countWords(text));
}

// 5. Sample Service x Location
const sampleSa = path.join(distDir, 'removals', 'house-removals', 'birmingham', 'index.html');
if (fs.existsSync(sampleSa)) {
  const text = getVisibleText(fs.readFileSync(sampleSa, 'utf-8'));
  console.log('Sample Service x Location (house-removals/birmingham) word count:', countWords(text));
}
