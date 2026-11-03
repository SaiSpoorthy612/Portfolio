import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://<user>.github.io/Portfolio/ on GitHub Pages
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
