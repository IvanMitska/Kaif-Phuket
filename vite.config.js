import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // PERFORMANCE: Optimize React plugin
      jsxRuntime: 'automatic',
      // FastRefresh optimizations
      fastRefresh: true,
    })
  ],
  base: '/', // Изменяем базовый путь для локальной разработки
  server: {
    historyApiFallback: true, // Перенаправляем все запросы на index.html для SPA
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://maps.google.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' ws: wss: https://www.google-analytics.com https://www.googletagmanager.com https://maps.googleapis.com; frame-src 'self' https://www.google.com https://maps.google.com;"
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
    assetsInlineLimit: 2048, // Reduce inline limit to 2KB
    cssCodeSplit: true, // Разделение CSS по чанкам
    sourcemap: false, // Отключаем в продакшене
    reportCompressedSize: false, // Экономия времени сборки

    // Оптимизация Rollup
    rollupOptions: {
      output: {
        // PERFORMANCE: Optimized chunk splitting - defer heavy libs
        manualChunks: (id) => {
          // Core React (essential for initial load)
          if (id.includes('react') && !id.includes('react-dom') && !id.includes('react-router')) {
            return 'vendor-react-core';
          }

          if (id.includes('react-dom')) {
            return 'vendor-react-dom';
          }

          // Router (critical for navigation)
          if (id.includes('react-router')) {
            return 'vendor-router';
          }

          // CRITICAL CHANGE: Split animations into separate chunks for lazy loading
          if (id.includes('framer-motion')) {
            return 'vendor-framer';
          }

          // GSAP animations (LAZY LOAD - not needed initially)
          if (id.includes('gsap') || id.includes('split-type')) {
            return 'vendor-gsap';
          }

          // i18n (needed early but can be optimized)
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'vendor-i18n';
          }

          // Styled components (large, should be optimized)
          if (id.includes('styled-components')) {
            return 'vendor-styled';
          }

          // Icons (lazy loadable)
          if (id.includes('heroicons') || id.includes('react-icons') || id.includes('lucide-react')) {
            return 'vendor-icons';
          }

          // Forms (not needed on homepage)
          if (id.includes('formik') || id.includes('yup')) {
            return 'vendor-forms';
          }

          // Helmet (SEO, defer loading)
          if (id.includes('react-helmet')) {
            return 'vendor-helmet';
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
    
    // PERFORMANCE: Aggressive minification with Terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.debug', 'console.info', 'console.warn'],
        passes: 3,
        // Additional aggressive compression
        arguments: true,
        booleans_as_integers: true,
        collapse_vars: true,
        comparisons: true,
        computed_props: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        hoist_funs: true,
        hoist_props: true,
        hoist_vars: false,
        if_return: true,
        inline: 3,
        join_vars: true,
        keep_fargs: false,
        loops: true,
        negate_iife: true,
        properties: true,
        reduce_funcs: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        toplevel: true,
        typeofs: true,
        unused: true,
      },
      format: {
        comments: false,
        ecma: 2020,
        semicolons: false,
        shebang: false,
      },
      mangle: {
        properties: false,
        toplevel: true,
        safari10: true,
      },
      toplevel: true,
      module: true,
    },

    // Target smaller chunk sizes
    chunkSizeWarningLimit: 500
  },
  
  // PERFORMANCE: Pre-bundle only critical dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-i18next',
      'i18next',
    ],
    // Exclude heavy libraries to load them on-demand
    exclude: [
      'gsap',
      'split-type',
      'framer-motion',
      'styled-components',
      '@heroicons/react/24/solid',
      'react-icons',
      'formik',
      'yup',
      'lucide-react'
    ],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true
      },
    }
  },
  
  // PERFORMANCE: Aggressive esbuild optimizations
  esbuild: {
    drop: ['console', 'debugger'],
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    ignoreAnnotations: false,
    target: 'es2020',
    legalComments: 'none',
    charset: 'utf8',
    logLevel: 'warning',
    // Additional optimizations
    logLimit: 0,
    pure: ['console.log', 'console.debug', 'console.info'],
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
