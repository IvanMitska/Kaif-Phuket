import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const largeFiles = [
  'public/images/combat.jpg',
  'public/images/thai-massage.jpg', 
  'public/images/facial.jpg',
  'public/images/restaurant.jpg'
];

async function optimizeLargeImages() {
  console.log('🔥 Aggressive optimization for large images...');
  
  for (const filePath of largeFiles) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      continue;
    }
    
    const originalSize = fs.statSync(filePath).size;
    
    await sharp(filePath)
      .jpeg({ 
        quality: 70, // Более агрессивное сжатие
        progressive: true,
        mozjpeg: true
      })
      .resize(1200, null, { // Еще меньший размер
        withoutEnlargement: true,
        fit: 'inside'
      })
      .toFile(filePath + '.tmp');
    
    // Заменяем оригинал
    fs.renameSync(filePath + '.tmp', filePath);
    
    const newSize = fs.statSync(filePath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`📄 ${path.basename(filePath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (-${savings}%)`);
  }
  
  console.log('✨ Large image optimization complete!');
}

optimizeLargeImages(); 