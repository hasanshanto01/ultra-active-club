/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#810ab5",

          "secondary": "#9abbe0",

          "accent": "#a888ea",

          "neutral": "#241F2E",

          "base-100": "#EDEDEE",

          "info": "#A1C9F7",

          "success": "#2EBDA3",

          "warning": "#F6B613",

          "error": "#EB5C7B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
