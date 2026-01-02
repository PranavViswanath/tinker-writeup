import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  // GitHub Pages deployment configuration
  site: 'https://PranavViswanath.github.io',
  base: '/rlvr-reasoning',
  output: 'static',
});

