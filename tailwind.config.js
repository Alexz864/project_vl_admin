/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5542F6",
        highlight: "#aaa",
        textInactive: "#d9cece",
        icon: "#222",
        bgLibrary: "#222",
        bgLibrary2: "#aaa",
        btnColor: "#ffff",
      },
    },
  },
  plugins: [],
};
