import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for deployment - use '/' for Vercel/Netlify, '/el.service/' for GitHub Pages
  base: '/',
  // Build optimizations
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  // Server configuration for development
  server: {
    port: 3000,
    open: true
  }
})
