import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true
  }
})
