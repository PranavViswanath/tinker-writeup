# Research Blog

A minimal, clean research blog built with Astro, inspired by the Thinking Machines blog design. Features a light theme, clean typography, and easy deployment to GitHub Pages.

## Features

- 🎨 Clean, minimal design with light theme
- 📝 Markdown/MDX support for blog posts
- 🚀 Easy deployment to GitHub Pages
- 📱 Fully responsive
- ⚡ Fast static site generation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:4321](http://localhost:4321) in your browser

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Adding Blog Posts

Create new blog posts in `src/content/blog/` as `.mdx` files. Each post should have frontmatter like this:

```mdx
---
title: "Your Post Title"
description: "A brief description"
author: "Your Name"
date: 2025-01-15
tags: ["research", "ai"]
---

Your content here...
```

## Customization

### Font

The blog currently uses **Inter** font (similar to GT America and available via Google Fonts). 

**To use GT America** (if you have a license):

1. Add your GT America font files (`.woff2` format recommended) to `public/fonts/`
2. Uncomment the `@font-face` declarations in `src/layouts/BaseLayout.astro`
3. Update the font file paths to match your files
4. The font stack will automatically use GT America if available, falling back to Inter

### Colors and Styling

Edit `tailwind.config.mjs` to customize colors and other design tokens.

### Site Configuration

Update `astro.config.mjs` to change:
- Site URL
- Base path (for GitHub Pages)
- Other Astro settings

## Deployment to GitHub Pages

1. Update `astro.config.mjs`:
   - Set `site` to your GitHub Pages URL (e.g., `https://YOUR_USERNAME.github.io`)
   - Set `base` to your repository name if needed

2. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on push to main

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── content/
│   │   └── blog/   # Blog posts (MDX files)
│   ├── layouts/    # Layout components
│   └── pages/      # Pages and routes
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## License

MIT

