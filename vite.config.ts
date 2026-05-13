import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Using relative base so the build works under any GitHub Pages path
// (both username.github.io and username.github.io/repo-name).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
