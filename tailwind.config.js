/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'bg-cake': " linear-gradient(0deg, #1C1C1E, #1C1C1E)",
      }
    },
  },
  plugins: [],
}

