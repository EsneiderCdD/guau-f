import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Alias configurados:
// @             -> src/
// @components   -> src/components
// @pages        -> src/pages
// @hooks        -> src/hooks
// @utils        -> src/utils
// @context      -> src/context

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@context': path.resolve(__dirname, './src/context'),
    },
  },
})
