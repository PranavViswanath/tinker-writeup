import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  // Update these for your GitHub Pages deployment:
  // - If repo is USERNAME.github.io, set base to '/' and site to 'https://USERNAME.github.io'
  // - If repo has a name, set base to '/REPO_NAME' and site to 'https://USERNAME.github.io'
  site: 'https://YOUR_USERNAME.github.io',
  base: '/tinker-writeup', // Change this to match your repository name, or '/' if using USERNAME.github.io
  output: 'static',
});

