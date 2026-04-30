import { transformFileSync } from '@babel/core'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const sourceFile = resolve(projectRoot, 'src/App.jsx')
const outputFile = resolve(projectRoot, 'src/App.js')

const result = transformFileSync(sourceFile, {
  babelrc: false,
  configFile: false,
  sourceType: 'module',
  comments: false,
  plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'classic' }]],
})

mkdirSync(dirname(outputFile), { recursive: true })
writeFileSync(
  outputFile,
  `// Generated from App.jsx by scripts/compile-jsx.mjs.\n${result.code}\n`,
)
