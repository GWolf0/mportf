/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light:"#E7E5E4",
        lighter:"#F5F5F4",
        lightest:"#FAFAF9",
        dark:"#1E293B",
        darker:"#0F172A",
        darkest:"#020617",
        primary:"#0891B2",
        accent:"#3B82F6",
        secondary:"#8B5CF6",
        semitrans:"rgba(1,1,1,0.25)",
        info:"#22C55E",
        error:"#EF4444",
        warning:"#F59E0B",
      }
    },
  },
  plugins: [],
}