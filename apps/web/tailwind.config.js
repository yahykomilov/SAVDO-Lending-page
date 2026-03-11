/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        accent: {
          purple: '#a855f7',
          blue: '#3b82f6',
        },
        gray: {
          850: '#18202f',
          950: '#0b0f1a',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.06), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow-green': '0 0 40px rgba(16, 185, 129, 0.15)',
        'glow-green-lg': '0 0 80px rgba(16, 185, 129, 0.2)',
        'glow-purple': '0 0 40px rgba(168, 85, 247, 0.15)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'blob': 'blob 8s infinite ease-in-out',
        'blob-reverse': 'blob 10s infinite ease-in-out reverse',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-dot': 'pulse-dot 2s infinite ease-in-out',
        'float': 'float 3.5s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
