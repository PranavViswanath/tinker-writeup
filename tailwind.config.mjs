/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        'cream': '#faf8f5',
        'text-primary': '#1a1a1a',
        'text-secondary': '#666666',
        'border-light': '#e5e5e0',
      },
    },
  },
  plugins: [],
}

