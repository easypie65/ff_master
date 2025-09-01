import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ GitHub Pages에서 JS/CSS 경로 깨짐 방지
export default defineConfig({
  plugins: [react()],
  base: '/ff_master/'
})
