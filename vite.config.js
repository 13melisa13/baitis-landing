import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // for github pages
  base: '/baitis-landing/',
//   for docker
//       base: '/'
})
