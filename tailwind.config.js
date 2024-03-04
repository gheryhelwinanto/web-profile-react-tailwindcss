/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        library: "url('/perpustakaan01.jpg')",
        down: "url('/down.png')",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        comforta: ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
