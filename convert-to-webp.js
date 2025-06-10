import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function convertToWebP() {
  console.log('🔄 Converting images to WebP format...');
  
  try {
    // Создаем папку для WebP изображений
    const webpDir = 'public/images-webp';
    if (!fs.existsSync(webpDir)) {
      fs.mkdirSync(webpDir, { recursive: true });
    }

    // Находим все изображения
    const imageFiles = await glob('public/images/**/*.{jpg,jpeg,png}');
    
    let totalConverted = 0;
    let totalSaved = 0;

    for (const inputPath of imageFiles) {
      try {
        const relativePath = path.relative('public/images', inputPath);
        const outputPath = path.join(webpDir, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        
        // Создаем папки если нужно
        const outputDirPath = path.dirname(outputPath);
        if (!fs.existsSync(outputDirPath)) {
          fs.mkdirSync(outputDirPath, { recursive: true });
        }

        const originalSize = fs.statSync(inputPath).size;
        
        // Конвертируем в WebP
        await sharp(inputPath)
          .webp({ 
            quality: 80,
            effort: 6, // Максимальная компрессия
            smartSubsample: true
          })
          .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFile(outputPath);

        const webpSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        totalConverted++;
        totalSaved += (originalSize - webpSize);
        
        console.log(`📄 ${path.basename(inputPath)} → ${path.basename(outputPath)}: ${(originalSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB (-${savings}%)`);
        
      } catch (error) {
        console.error(`❌ Error converting ${inputPath}:`, error.message);
      }
    }
    
    console.log(`\n🎯 Converted ${totalConverted} images to WebP`);
    console.log(`💾 Total saved: ${(totalSaved/1024/1024).toFixed(1)}MB`);
    console.log('✨ WebP conversion complete! Check public/images-webp/');
    
    // Создаем также fallback мапу для браузеров без поддержки WebP
    const fallbackMapPath = 'src/utils/imageMap.js';
    let fallbackMap = '// Автоматически сгенерированная карта изображений\n';
    fallbackMap += 'export const imageMap = {\n';
    
    for (const inputPath of imageFiles) {
      const relativePath = path.relative('public/images', inputPath);
      const webpPath = relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const originalPath = relativePath;
      
      fallbackMap += `  '${originalPath}': {\n`;
      fallbackMap += `    webp: '/images-webp/${webpPath}',\n`;
      fallbackMap += `    fallback: '/images/${originalPath}'\n`;
      fallbackMap += `  },\n`;
    }
    
    fallbackMap += '};\n';
    
    fs.writeFileSync(fallbackMapPath, fallbackMap);
    console.log(`📋 Generated image map at ${fallbackMapPath}`);
    
  } catch (error) {
    console.error('❌ Error converting to WebP:', error);
  }
}

convertToWebP(); 