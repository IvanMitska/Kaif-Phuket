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
    outDir: 'dist',
    assetsInlineLimit: 1024, // AGGRESSIVE: Reduce to 1KB to minimize main bundle
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,

    // AGGRESSIVE: Rollup optimizations
    rollupOptions: {
      output: {
        // AGGRESSIVE CHUNK SPLITTING: Maximize code splitting for minimal initial load
        manualChunks: (id) => {
          // CRITICAL: Only React core in initial bundle
          if (id.includes('node_modules/react/') && !id.includes('react-dom') && !id.includes('react-router')) {
            return 'react-core';
          }

          // DEFER: React DOM in separate chunk
          if (id.includes('react-dom/client')) {
            return 'react-dom-client';
          }
          if (id.includes('react-dom')) {
            return 'react-dom';
          }

          // DEFER: Router
          if (id.includes('react-router-dom')) {
            return 'react-router';
          }

          // DEFER: Animations (heavy, load on interaction)
          if (id.includes('framer-motion')) {
            return 'framer-motion';
          }

          // DEFER: GSAP (not needed initially)
          if (id.includes('gsap')) {
            return 'gsap';
          }
          if (id.includes('split-type')) {
            return 'split-type';
          }

          // DEFER: i18n (load async)
          if (id.includes('i18next-browser-languagedetector')) {
            return 'i18n-detector';
          }
          if (id.includes('i18next')) {
            return 'i18n-core';
          }
          if (id.includes('react-i18next')) {
            return 'react-i18n';
          }

          // DEFER: Styled components (heavy, minimize usage)
          if (id.includes('styled-components')) {
            return 'styled-components';
          }

          // DEFER: Icons (load per page)
          if (id.includes('heroicons')) {
            return 'heroicons';
          }
          if (id.includes('lucide-react')) {
            return 'lucide';
          }
          if (id.includes('react-icons')) {
            return 'react-icons';
          }

          // DEFER: Forms (only for contact page)
          if (id.includes('formik')) {
            return 'formik';
          }
          if (id.includes('yup')) {
            return 'yup';
          }

          // DEFER: Helmet (SEO, not critical for initial render)
          if (id.includes('react-helmet')) {
            return 'react-helmet';
          }

          // DEFER: All other node_modules
          if (id.includes('node_modules')) {
            // Further split large libraries
            const match = id.match(/node_modules\/(@?[^/]+)/);
            if (match) {
              const packageName = match[1];
              // Split large packages individually
              if (['scheduler', 'object-assign', 'prop-types'].includes(packageName)) {
                return `vendor-${packageName}`;
              }
            }
            return 'vendor-misc';
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

    // AGGRESSIVE: Target very small chunk sizes
    chunkSizeWarningLimit: 300
  },

  // AGGRESSIVE: Minimal pre-bundling for faster initial load
  optimizeDeps: {
    include: [
      'react',
      'react/jsx-runtime',
      'react-dom/client',
    ],
    // AGGRESSIVE: Exclude almost everything for on-demand loading
    exclude: [
      'react-router-dom',
      'react-i18next',
      'i18next',
      'i18next-browser-languagedetector',
      'gsap',
      'split-type',
      'framer-motion',
      'styled-components',
      '@heroicons/react',
      'react-icons',
      'lucide-react',
      'formik',
      'yup',
      'react-helmet-async'
    ],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true
      },
      treeShaking: true,
      minify: true,
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
