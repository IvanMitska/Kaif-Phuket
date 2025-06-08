import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  try {
    // Оптимизируем JPG изображения
    const jpgFiles = await imagemin(['public/images/**/*.{jpg,jpeg}'], {
      destination: 'public/images-optimized',
      plugins: [
        imageminMozjpeg({
          quality: 85, // Качество 85% - хороший баланс размера и качества
          progressive: true // Прогрессивная загрузка
        })
      ]
    });

    // Оптимизируем PNG изображения  
    const pngFiles = await imagemin(['public/images/**/*.png'], {
      destination: 'public/images-optimized',
      plugins: [
        imageminPngquant({
          quality: [0.8, 0.9] // Качество 80-90%
        })
      ]
    });

    console.log(`✅ Optimized ${jpgFiles.length} JPG files`);
    console.log(`✅ Optimized ${pngFiles.length} PNG files`);
    
    // Показываем статистику сжатия
    let totalOriginal = 0;
    let totalOptimized = 0;
    
    for (const file of [...jpgFiles, ...pngFiles]) {
      const originalPath = file.sourcePath;
      const optimizedPath = file.destinationPath;
      
      if (fs.existsSync(originalPath) && fs.existsSync(optimizedPath)) {
        const originalSize = fs.statSync(originalPath).size;
        const optimizedSize = fs.statSync(optimizedPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        totalOriginal += originalSize;
        totalOptimized += optimizedSize;
        
        console.log(`📄 ${path.basename(originalPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (-${savings}%)`);
      }
    }
    
    const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
    console.log(`\n🎯 Total: ${(totalOriginal/1024/1024).toFixed(1)}MB → ${(totalOptimized/1024/1024).toFixed(1)}MB (-${totalSavings}%)`);
    console.log('✨ Optimization complete! Check public/images-optimized/');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages(); 