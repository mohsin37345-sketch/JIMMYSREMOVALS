import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processLogo() {
  const inputPath = 'C:/Users/Hp/.gemini/antigravity-ide/brain/a2362989-6ce5-437c-af3a-adac984912a9/.user_uploaded/media_1789135667208.png';
  
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  // 1. Flood fill from borders to identify outer background only
  const visited = new Uint8Array(width * height);
  const isOuterBg = new Uint8Array(width * height);
  const queue = [];

  function isNearWhite(idx) {
    const r = data[idx * 4];
    const g = data[idx * 4 + 1];
    const b = data[idx * 4 + 2];
    return r > 235 && g > 235 && b > 235;
  }

  for (let x = 0; x < width; x++) {
    const topIdx = x;
    const btmIdx = (height - 1) * width + x;
    if (isNearWhite(topIdx)) { visited[topIdx] = 1; isOuterBg[topIdx] = 1; queue.push(topIdx); }
    if (isNearWhite(btmIdx)) { visited[btmIdx] = 1; isOuterBg[btmIdx] = 1; queue.push(btmIdx); }
  }

  for (let y = 0; y < height; y++) {
    const leftIdx = y * width;
    const rightIdx = y * width + (width - 1);
    if (isNearWhite(leftIdx) && !visited[leftIdx]) { visited[leftIdx] = 1; isOuterBg[leftIdx] = 1; queue.push(leftIdx); }
    if (isNearWhite(rightIdx) && !visited[rightIdx]) { visited[rightIdx] = 1; isOuterBg[rightIdx] = 1; queue.push(rightIdx); }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1,
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && !visited[n]) {
        visited[n] = 1;
        if (isNearWhite(n)) {
          isOuterBg[n] = 1;
          queue.push(n);
        }
      }
    }
  }

  // 2. Build Light Version (transparent exterior bg, preserve original colors)
  const lightData = Buffer.from(data);
  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const offset = idx * 4;

      if (isOuterBg[idx]) {
        lightData[offset + 3] = 0; // Transparent exterior
      } else {
        const r = lightData[offset];
        const g = lightData[offset + 1];
        const b = lightData[offset + 2];
        const lum = (r + g + b) / 3;

        // Anti-alias exterior perimeter transition
        if (lum > 225) {
          const alpha = Math.max(0, Math.min(255, Math.round(255 * ((255 - lum) / 30))));
          lightData[offset + 3] = alpha;
        }

        if (lightData[offset + 3] > 10) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
  }

  const pad = 12;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(width - cropX, (maxX - minX) + pad * 2);
  const cropH = Math.min(height - cropY, (maxY - minY) + pad * 2);

  // 3. Build Dark Mode Version
  // - Navy elements (#0b2545) become clean crisp white (#ffffff)
  // - Amber/yellow elements (#e5a00d) stay vibrant amber
  // - Interior enclosed white pixels (van windshield, side window) become sleek dark slate (#1e293b) so they contrast with the white truck body
  const darkData = Buffer.from(lightData);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const offset = idx * 4;
      const a = darkData[offset + 3];

      if (a === 0) continue;

      const r = darkData[offset];
      const g = darkData[offset + 1];
      const b = darkData[offset + 2];

      // Check if it's navy (low red, low green, medium/low blue)
      const isNavy = (r < 75 && g < 90 && b < 130) || (r < 55 && g < 55 && b < 70);

      // Check if it's interior white (e.g. inside the truck cab / windshield / headlight)
      // Only in the left half of image where the truck is located (x < width * 0.45)
      const isInteriorWhite = !isOuterBg[idx] && r > 220 && g > 220 && b > 220 && x < width * 0.45;

      if (isNavy) {
        darkData[offset] = 255;
        darkData[offset + 1] = 255;
        darkData[offset + 2] = 255;
      } else if (isInteriorWhite) {
        // Tint truck windows to sleek dark slate #1e293b
        darkData[offset] = 30;
        darkData[offset + 1] = 41;
        darkData[offset + 2] = 59;
      }
    }
  }

  const outDir = path.resolve('public/images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Save light logo
  await sharp(lightData, { raw: { width, height, channels: 4 } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png()
    .toFile(path.join(outDir, 'logo.png'));

  // Save dark logo
  await sharp(darkData, { raw: { width, height, channels: 4 } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png()
    .toFile(path.join(outDir, 'logo-dark.png'));

  console.log(`Logo processed successfully! Output dimensions: ${cropW}x${cropH}`);
}

processLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
