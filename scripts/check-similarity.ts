import fs from 'node:fs';
import path from 'node:path';

function getWordSet(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2)
  );
}

function computeSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const word of setA) {
    if (setB.has(word)) intersection++;
  }
  return (2 * intersection) / (setA.size + setB.size);
}

function getAllJsonFiles(dir: string): string[] {
  let entries: string[] = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) entries.push(...getAllJsonFiles(full));
    else if (item.name.endsWith('.json')) entries.push(full);
  }
  return entries;
}

const dir = path.resolve('src/content/locations');
const files = getAllJsonFiles(dir);
const locs = files.map((f) => {
  const d = JSON.parse(fs.readFileSync(f, 'utf8'));
  return {
    file: path.relative(dir, f),
    town: d.town,
    words: getWordSet((d.intro || '') + ' ' + (d.localKnowledge || '')),
  };
});

const high: Array<{ a: string; b: string; sim: number }> = [];
for (let i = 0; i < locs.length; i++) {
  for (let j = i + 1; j < locs.length; j++) {
    const sim = computeSimilarity(locs[i].words, locs[j].words);
    if (sim > 0.45) {
      high.push({ a: locs[i].file, b: locs[j].file, sim: Math.round(sim * 1000) / 10 });
    }
  }
}

high.sort((x, y) => y.sim - x.sim);
console.log(`Pairs with similarity > 45% (${high.length} pairs):`);
for (const p of high.slice(0, 30)) {
  console.log(`${p.a} <-> ${p.b}: ${p.sim}%`);
}

console.log('\n--- META LENGTH AUDIT ---');
for (const f of files) {
  const d = JSON.parse(fs.readFileSync(f, 'utf8'));
  const rel = path.relative(dir, f);
  if (d.metaTitle && d.metaTitle.length > 60) {
    console.log(`[TITLE > 60] ${rel} (${d.metaTitle.length}): "${d.metaTitle}"`);
  }
  if (d.metaDescription && d.metaDescription.length > 155) {
    console.log(`[DESC > 155] ${rel} (${d.metaDescription.length}): "${d.metaDescription}"`);
  }
}

