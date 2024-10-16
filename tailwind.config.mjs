/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#154142",
        "primary-dark": "#0B3132",
        secondary: "#B6A27A",
        "secondary-dark": "#A38C5D",
      },
    },
  },
  plugins: [],
};
