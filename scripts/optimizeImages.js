import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../public/assets');
const webpDir = path.join(__dirname, '../public/assets/webp');

async function ensureWebpDir() {
  try {
    await fs.mkdir(webpDir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function optimizeImages() {
  await ensureWebpDir();
  
  const files = await fs.readdir(assetsDir);
  
  for (const file of files) {
    if (file === 'webp') continue;
    
    const filePath = path.join(assetsDir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Skip GIF files as they might be animated
    if (ext === '.gif') continue;
    
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const outputPath = path.join(webpDir, `${path.parse(file).name}.webp`);
      
      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        globalThis.console.log(`Converted ${file} to WebP`);
      } catch (err) {
        globalThis.console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

optimizeImages().catch((err) => {
  globalThis.console.error('Error during image optimization:', err);
  process.exit(1);
});
