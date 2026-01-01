# GT America Font Setup

GT America is a commercial font and is not available via Google Fonts. This blog currently uses **Inter** as a fallback, which has a similar aesthetic.

## If You Have a GT America License

1. **Obtain the font files** in `.woff2` format (recommended for web)
   - GT America Regular (400)
   - GT America Medium (500)
   - GT America Semibold (600)
   - GT America Bold (700)

2. **Add fonts to the project:**
   ```bash
   mkdir -p public/fonts
   # Copy your GT America .woff2 files to public/fonts/
   ```

3. **Update the font declarations:**
   - Open `src/layouts/BaseLayout.astro`
   - Uncomment the `@font-face` declarations in the `<style is:global>` section
   - Update the file paths to match your actual font filenames

4. **The font will automatically be used** - The CSS font stack is already configured to use GT America if available, falling back to Inter.

## Alternative: Using GT America via CDN

If you have access to GT America via a CDN or font service, you can:

1. Add the `<link>` tag in the `<head>` section of `BaseLayout.astro`
2. Update the font-family in the CSS to prioritize GT America

## Current Setup

The blog uses **Inter** from Google Fonts, which is:
- Free and open source
- Similar aesthetic to GT America
- Optimized for screen reading
- Automatically loaded via CDN

No additional setup is required to use Inter.

