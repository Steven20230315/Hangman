import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // Request starting with /api will be proxied to http://localhost:3300/api
  //     '/api': {
  //       target: 'http://localhost:3300/api',
  //       changeOrigin: true,
  //       // Rewrite the request path to remove the /api prefix
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //     '/test': {
  //       target: 'http://localhost:3300/test',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/test/, '')
  //     },
  //   }
  // }
})
