const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.tsx",
    "./app/**/*.jsx",
    "./app/**/*.js",
    "./app/**/*.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        redTransparent: "rgba(204, 12, 37, 0.3)",
        blueTransparent: "rgba(60, 59, 210, 0.3)",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    darkTheme: "dark",
    themes: ["light", "dark"],
  },
};
