import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  root: './react-app',
  build: {
   outDir: 'dist'
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',  // Polyfill 'crypto' for the browser
    },
  },
});