/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#154142",
        "primary-dark": "#0B3132",
        "primary-light": "#1c5c5e",
        secondary: "#B6A27A",
        "secondary-dark": "#A38C5D",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      animation: {
        stroke: "stroke 3s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.75s ease forwards",
        fadeInDelay: "fadeIn 0.75s ease 0.15s forwards",
      },
    },
  },
  plugins: [],
};
