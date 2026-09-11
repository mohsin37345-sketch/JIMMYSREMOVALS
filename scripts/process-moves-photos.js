import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '..', 'public', 'images', 'moves');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  {
    src: 'C:/Users/Hp/.gemini/antigravity-ide/brain/a2362989-6ce5-437c-af3a-adac984912a9/.user_uploaded/media_1789137059619.jpg',
    baseName: 'luton-van-tail-lift'
  },
  {
    src: 'C:/Users/Hp/.gemini/antigravity-ide/brain/a2362989-6ce5-437c-af3a-adac984912a9/.user_uploaded/media_1789137533031.png',
    baseName: 'secure-appliance-transport'
  },
  {
    src: 'C:/Users/Hp/.gemini/antigravity-ide/brain/a2362989-6ce5-437c-af3a-adac984912a9/.user_uploaded/media_1789137533155.png',
    baseName: 'furniture-packing-blankets'
  }
];

async function processImages() {
  for (const item of images) {
    console.log(`Processing ${item.baseName}...`);
    
    // WebP version (optimized for web)
    await sharp(item.src)
      .resize(900, null, { withoutEnlargement: false, fit: 'inside' })
      .webp({ quality: 85 })
      .toFile(path.join(outDir, `${item.baseName}.webp`));

    // JPEG fallback version
    await sharp(item.src)
      .resize(900, null, { withoutEnlargement: false, fit: 'inside' })
      .jpeg({ quality: 85, progressive: true })
      .toFile(path.join(outDir, `${item.baseName}.jpg`));
      
    console.log(`✓ Generated ${item.baseName}.webp and .jpg`);
  }
}

processImages()
  .then(() => console.log('All move photos processed successfully!'))
  .catch(err => {
    console.error('Error processing photos:', err);
    process.exit(1);
  });
