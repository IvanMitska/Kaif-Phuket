import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Изменяем базовый путь для локальной разработки
  server: {
    historyApiFallback: true, // Перенаправляем все запросы на index.html для SPA
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' ws: wss:;"
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // Алиас для импорта из src
    }
  },
  
  // CSS конфигурация - только обычный CSS, без SCSS
  css: {
    preprocessorOptions: {
      // Отключаем все препроцессоры CSS
    },
    modules: false,
    devSourcemap: false
  },
  
  publicDir: 'public', // Публичная директория
  build: {
    outDir: 'dist', // Директория для билда
    assetsInlineLimit: 0, // Отключаем для изображений, чтобы не переводить в base64
    cssCodeSplit: true, // Разделение CSS по чанкам
    sourcemap: false, // Отключаем в продакшене
    reportCompressedSize: false, // Экономия времени сборки
    
    // Оптимизация Rollup
    rollupOptions: {
      output: {
        // Улучшенное разделение чанков
        manualChunks: (id) => {
          // Основные реакт-библиотеки
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor-react';
          }
          
          // Роутер
          if (id.includes('react-router')) {
            return 'vendor-router';
          }
          
          // Анимации
          if (id.includes('framer-motion')) {
            return 'vendor-animations';
          }
          
          // i18n
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'vendor-i18n';
          }
          
          // Стили
          if (id.includes('styled-components')) {
            return 'vendor-styles';
          }
          
          // UI элементы
          if (id.includes('heroicons')) {
            return 'vendor-icons';
          }
          
          // Формы
          if (id.includes('formik') || id.includes('yup')) {
            return 'vendor-forms';
          }
          
          // Остальные node_modules
          if (id.includes('node_modules')) {
            return 'vendor-other';
          }
        },
        
        // Оптимизация имен файлов для лучшего кэширования
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|webp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          
          return `assets/[name]-[hash][extname]`;
        }
      },
      
      // Оптимизация импортов
      input: {
        main: resolve(__dirname, 'index.html')
      },
      
      // Исключаем проблемные модули
      external: (id) => {
        // Исключаем любые SCSS файлы
        if (id.includes('.scss') || id.includes('scss')) {
          return true;
        }
        return false;
      }
    },
    
    // Минификация с Terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.debug', 'console.info'], // Удаляем вызовы к консоли
        passes: 3, // Увеличиваем количество проходов минификации
      },
      format: {
        comments: false, // Удаляем комментарии из кода
        ecma: 2020, // Используем современный стандарт
      },
      mangle: {
        properties: false, // Не изменяем имена свойств объектов
      },
      toplevel: true, // Включаем максимальную оптимизацию для топ-уровня
    },
    
    // Размеры для предупреждения
    chunkSizeWarningLimit: 1000
  },
  
  // Предварительная оптимизация зависимостей
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'framer-motion',
      'react-router-dom',
      'react-i18next',
      'i18next',
      'styled-components',
      '@heroicons/react/24/outline',
      '@heroicons/react/24/solid',
      'formik',
      'yup'
    ],
    // Игнорируем неиспользуемый код и SCSS
    exclude: ['@heroicons/react/24/solid', 'react-icons', '**/*.scss', '**/*.sass'] 
  },
  
  // Оптимизации для esbuild
  esbuild: {
    // Оптимизация для продакшена
    drop: ['console', 'debugger'],
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    ignoreAnnotations: false,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    legalComments: 'none',
  },
  
  // Предварительный рендеринг для SEO
  prerender: {
    disabled: false, // Включаем для повышения скорости загрузки
    concurrency: 4, // Оптимизируем количество параллельных процессов
    renderOptions: {
      injectWebP: true, // Автоматическая поддержка WebP
    },
  },
})
