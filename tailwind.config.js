/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultColor: "#3A2A1C",
        defaultBg: "#F2F2F2",
        defaultButton: "#c5a58a",
      },
    },
  },
  plugins: [],
}

