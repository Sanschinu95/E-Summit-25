import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    tailwindcss(),
    react()
  ],
  base: '/bplanjr/',  // This is CRUCIAL for subdirectory deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})