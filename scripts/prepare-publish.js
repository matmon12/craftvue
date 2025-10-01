#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Читаем package.json
const packageJsonPath = path.join(__dirname, '../packages/craftvue/package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

const command = process.argv[2]

if (command === 'publish') {
  // Переключаем на npm версию
  packageJson.dependencies['@craftvue/icons'] = '^1.0.0'
  console.log('✅ Настроено для публикации: @craftvue/icons -> ^1.0.0')

  // Записываем обратно
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
} else if (command === 'dev') {
  packageJson.dependencies['@craftvue/icons'] = 'workspace:*'
  console.log('✅ Настроено для разработки: @craftvue/icons -> workspace:*')

  // Записываем обратно
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
} else {
  console.log('Использование:')
  console.log('  node scripts/prepare-publish.js dev     - для разработки')
  console.log('  node scripts/prepare-publish.js publish - для публикации')

  process.exit(1)
}

// "prepare:publish": "node scripts/prepare-publish.js publish",
// "prepare:dev": "node scripts/prepare-publish.js dev",
