import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  base: '/bank-portfolio/',
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [],
      rehypePlugins: [],
    }),
    react(),
  ],
})
