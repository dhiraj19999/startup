/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22FF88",
        tealGlow: "#00E5CC",
        blueGlow: "#1E90FF",
        darkBg: "#050B0E",
        darkBg2: "#0A1A1F"
      },
    },
  },
  plugins: [],
}
