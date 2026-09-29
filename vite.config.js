import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  esbuild: false,
  keepProcessEnv: true,
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        sponsors: resolve(projectRoot, 'patrocinadores/index.html'),
      },
    },
  },
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },
  resolve: {
    preserveSymlinks: true,
  },
})
