/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gold: {
          light: "hsl(var(--gold-light))",
          DEFAULT: "hsl(var(--gold))",
          dark: "hsl(var(--gold-dark))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          dark: "hsl(var(--cream-dark))",
        },
        charcoal: "hsl(var(--charcoal))",
        sepia: "hsl(var(--sepia))",
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        elegant: "0 4px 20px -2px hsl(30 20% 15% / 0.1), 0 8px 40px -4px hsl(30 20% 15% / 0.05)",
        gold: "0 0 20px hsl(43 60% 45% / 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
