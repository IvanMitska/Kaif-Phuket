import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Изменяем базовый путь для локальной разработки
  server: {
    historyApiFallback: true, // Перенаправляем все запросы на index.html для SPA
  },
})
