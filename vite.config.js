import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages under a repo path (e.g. https://<user>.github.io/job-finder-/)
  // Vite needs a base so built assets are referenced correctly.
  base: '/job-finder-/',
  plugins: [react(), tailwindcss()],
})
