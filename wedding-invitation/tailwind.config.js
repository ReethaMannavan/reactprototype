/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",              // Vite entry point
    "./src/**/*.{js,jsx,ts,tsx}" // All React component files
  ],
  theme: {
    extend: { 
      colors: {
    lavender: "#E6E6FA",
    peach: "#FFE5B4",
    amber: "#FFAB0D"
  },
  fontFamily: {
    poppins: ["Poppins", "sans-serif"]
  }
},
  },
  plugins: [],
}

