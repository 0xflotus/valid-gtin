import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    entry: ['src/index.js'],
    format: 'esm',
    minify: true,
    outDir: 'dist',
    outExtensions: () => ({ js: '.js' }),
  },
  lint: {
    ignorePatterns: ['coverage/**', 'dist/**'],
  },
  fmt: {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    tabWidth: 2,
    endOfLine: 'lf',
  },
});
