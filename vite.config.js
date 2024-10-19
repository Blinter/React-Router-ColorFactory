import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React-Router-ColorFactory/',
  server: {
    middlewareMode: 'html'
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        '404': '404.html'
      }
    }
  }
})