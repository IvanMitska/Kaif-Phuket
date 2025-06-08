import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function optimizeImages() {
  console.log('🖼️  Starting image optimization with Sharp...');
  
  try {
    // Создаем папку для оптимизированных изображений
    const outputDir = 'public/images-optimized';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Находим все изображения
    const jpgFiles = await glob('public/images/**/*.{jpg,jpeg}');
    const pngFiles = await glob('public/images/**/*.png');
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    let processedCount = 0;

    // Обрабатываем JPG файлы
    for (const inputPath of jpgFiles) {
      const relativePath = path.relative('public/images', inputPath);
      const outputPath = path.join(outputDir, relativePath);
      
      // Создаем папки если нужно
      const outputDirPath = path.dirname(outputPath);
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }

      const originalSize = fs.statSync(inputPath).size;
      
      await sharp(inputPath)
        .jpeg({ 
          quality: 85, 
          progressive: true,
          mozjpeg: true 
        })
        .resize(1920, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .toFile(outputPath);

      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      processedCount++;
      
      console.log(`📄 ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (-${savings}%)`);
    }

    // Обрабатываем PNG файлы
    for (const inputPath of pngFiles) {
      const relativePath = path.relative('public/images', inputPath);
      const outputPath = path.join(outputDir, relativePath);
      
      // Создаем папки если нужно
      const outputDirPath = path.dirname(outputPath);
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }

      const originalSize = fs.statSync(inputPath).size;
      
      await sharp(inputPath)
        .png({ 
          quality: 90,
          compressionLevel: 8,
          palette: true
        })
        .resize(1920, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .toFile(outputPath);

      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      processedCount++;
      
      console.log(`📄 ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (-${savings}%)`);
    }
    
    const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
    console.log(`\n🎯 Processed ${processedCount} images`);
    console.log(`📊 Total: ${(totalOriginal/1024/1024).toFixed(1)}MB → ${(totalOptimized/1024/1024).toFixed(1)}MB (-${totalSavings}%)`);
    console.log('✨ Optimization complete! Check public/images-optimized/');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages(); 