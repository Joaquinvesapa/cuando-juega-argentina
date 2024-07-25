/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      textlight: "#040316",
      bglight: "#FBFBFE",
      primarylight: "#72AADF",
      secondarylight: "#B7DAFB",
      accentlight: "#166EC0",
      cardslight: "#EEEEEE",
      textdark: "#EAE9FC",
      bgdark: "#010104",
      primarydark: "#20598D",
      secondarydark: "#042748",
      accentdark: "#3F97E9",
      cardsdark: "#03162B",
    },
    extend: {},
  },
  plugins: [],
};
