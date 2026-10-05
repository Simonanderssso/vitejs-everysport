import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.everysport.com', // ingen /v1 här
        changeOrigin: true,
        secure: true,
        // Byt ledande '/api' till '/v1' (utan regex)
        rewrite: (p) => p.startsWith('/api') ? '/v1' + p.slice(4) : p,
      },
    },
  },
})
