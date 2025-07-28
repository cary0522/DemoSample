/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultColor:"#4076cb" ,
        defaultBg: "#F2F2F2",
        defaultButton: "#b9e1ff",
        defaultBtnHover: "#f9f871",
        defaultHoverColor:"#8cb1ed",
        defaultCancel: "#eb98ac"
      },
    },
  },
  plugins: [],
}

