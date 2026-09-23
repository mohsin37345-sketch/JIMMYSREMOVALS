import fs from 'node:fs';
import path from 'node:path';

function countWords(str: string): number {
  return (str || '').trim().split(/\s+/).filter(Boolean).length;
}

// 1. Check services
console.log('--- SERVICES ---');
const servicesDir = path.resolve('src/content/services');
fs.readdirSync(servicesDir).filter(f => f.endsWith('.json')).forEach(f => {
  const d = JSON.parse(fs.readFileSync(path.join(servicesDir, f), 'utf-8'));
  const text = [
    d.title, d.heroHeading, d.heroSubheading, d.summary,
    ...(d.benefits || []), ...(d.whatsIncluded || []), ...(d.whatsNotIncluded || []),
    ...(d.process || []).map((p: any) => p.title + ' ' + p.description),
    d.priceNotes,
    ...(d.faqs || []).map((q: any) => q.question + ' ' + q.answer)
  ].join(' ');
  console.log(`${f}: ${countWords(text)} words`);
});

// 2. Check locations
console.log('--- LOCATIONS ---');
const locDir = path.resolve('src/content/locations');
function getAllLocationFiles(dir: string): string[] {
  let entries: string[] = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) entries.push(...getAllLocationFiles(full));
    else if (item.name.endsWith('.json')) entries.push(full);
  }
  return entries;
}
getAllLocationFiles(locDir).forEach(filePath => {
  const f = path.relative(locDir, filePath);
  const d = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const text = [
    d.town, d.intro, d.localKnowledge, d.travelInfo,
    d.cleanAirZone?.note,
    ...(d.localFaqs || []).map((q: any) => q.question + ' ' + q.answer)
  ].join(' ');
  console.log(`${f} (Tier ${d.tier}): ${countWords(text)} words`);
});

// 3. Check serviceAreas
console.log('--- SERVICE AREAS ---');
const saDir = path.resolve('src/content/service-areas');
fs.readdirSync(saDir).filter(f => f.endsWith('.json')).forEach(f => {
  const d = JSON.parse(fs.readFileSync(path.join(saDir, f), 'utf-8'));
  const text = [
    d.uniqueIntro, d.localAngle,
    d.caseStudy ? (d.caseStudy.title + ' ' + d.caseStudy.scenario + ' ' + d.caseStudy.outcome) : '',
    ...(d.faqs || []).map((q: any) => q.question + ' ' + q.answer)
  ].join(' ');
  console.log(`${f}: ${countWords(text)} words`);
});
