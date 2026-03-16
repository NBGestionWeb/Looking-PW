/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'looking-dark': '#0A0A0A',
        'looking-red': '#E63946', // El color del goteo
        'vip-gold': '#D4AF37',   // Para detalles del salón VIP
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
      },
      backgroundImage: {
        'tiles': "url('/assets/bg-tiles.webp')",
      }
    },
  },
  plugins: [],
}