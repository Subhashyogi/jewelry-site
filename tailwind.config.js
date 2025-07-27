// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-charcoal": "#1c1a18",
        "brand-gold": "#fcd462",
        "brand-gray": "#A0A0A0",
        "brand-black": "#000000",
        "brand-white": "#ffffff",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // A clean, modern sans-serif font
        serif: ['"Playfair Display"', 'serif'], // An elegant, classic serif font
      },
      animation: {
        kenburns: 'kenburns 15s ease-out forwards',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-2%, 2%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add the plugin here
  ],
}