import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alejandro-llanganate.github.io',
  base: '/birthday-tefa',
  output: 'static',
  build: {
    assets: 'assets'
  }
}); 