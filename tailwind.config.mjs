/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ebebeb",
        secondary: "#31929A",
        tertiary: "#27272a",
        background: "#111111",
      },
    },
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "3.75rem",
      "6xl": "4.5rem",
      "7xl": "6rem",
      "8xl": "8rem",
      "9xl": "9rem",
    },
  },
  plugins: [],
};
