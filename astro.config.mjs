import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alejandro-llanganate.github.io',
  base: '/chritsmas-tree',
  output: 'static',
  build: {
    assets: 'assets'
  }
}); 