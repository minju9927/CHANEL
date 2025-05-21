import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CHANEL/', // 필수: GitHub repo 이름
  build: {
    outDir: 'docs', 
  },
  plugins: [react()],
  css: {
    devSourcemap: true  // ✅ 요게 핵심!
  }
})
