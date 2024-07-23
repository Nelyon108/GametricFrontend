import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Home.html'),
        about: resolve(__dirname, 'About.html'),
        contact: resolve(__dirname, 'Contact.html')
      }
    }
  }
})
