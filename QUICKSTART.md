# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see your blog.

## 3. Create Your First Blog Post

Create a new file in `src/content/blog/`:

```bash
# Example: src/content/blog/my-first-post.mdx
```

With this content:

```mdx
---
title: "My First Post"
description: "A description of my first post"
author: "Your Name"
date: 2025-01-15
tags: ["research"]
---

# My First Post

Write your content here using Markdown...
```

## 4. Customize Your Site

- **Site title/name**: Edit `src/pages/index.astro` and `src/layouts/BaseLayout.astro`
- **Navigation**: Edit the nav links in `src/layouts/BaseLayout.astro`
- **Colors**: Edit `tailwind.config.mjs`
- **About page**: Edit `src/pages/about.astro`

## 5. Deploy to GitHub Pages

1. **Update `astro.config.mjs`**:
   - Set `site` to your GitHub Pages URL
   - Set `base` to your repository name (or `'/'` if using `USERNAME.github.io`)

2. **Initialize git and push**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The site will deploy automatically on every push to `main`

## Next Steps

- Read the full [README.md](README.md) for more details
- Check [FONT_SETUP.md](FONT_SETUP.md) if you want to use GT America font
- Start writing blog posts in `src/content/blog/`

