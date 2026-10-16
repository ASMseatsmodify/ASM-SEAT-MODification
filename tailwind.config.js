/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
        },
        brand: {
          yellow: '#F5C518',
          gold: '#D4AF37',
          dark: '#0A0A0A',
          charcoal: '#1A1A1A',
          surface: '#1E1E1E',
          card: '#252525',
          silver: '#A0A0A0',
          light: '#F0F0F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(26,26,26,0.75) 60%, rgba(10,10,10,0.85) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'yellow-glow': '0 0 20px rgba(245, 197, 24, 0.4)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.5)',
        'inner-dark': 'inset 0 2px 10px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
