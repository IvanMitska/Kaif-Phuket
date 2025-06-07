import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Изменяем базовый путь для локальной разработки
  server: {
    historyApiFallback: true, // Перенаправляем все запросы на index.html для SPA
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // Алиас для импорта из src
    }
  },
  publicDir: 'public', // Публичная директория
  build: {
    outDir: 'dist', // Директория для билда
    assetsInlineLimit: 0, // Отключаем встраивание ассетов, чтобы все изображения обрабатывались как файлы
  }
})
