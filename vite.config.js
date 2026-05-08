import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  esbuild: false,
  keepProcessEnv: true,
  build: {
    minify: false,
  },
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },
  resolve: {
    preserveSymlinks: true,
  },
})
