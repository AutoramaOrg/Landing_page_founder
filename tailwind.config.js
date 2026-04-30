/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: '#05070d',
        carbon: '#080b12',
        ember: '#ff263d',
        voltage: '#1ca7ff',
        trophy: '#f5a623',
        brass: '#b86b2d',
        chrome: '#cbd5e1',
      },
      fontFamily: {
        display: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        redglow: '0 0 28px rgba(255, 38, 61, .45)',
        blueglow: '0 0 30px rgba(28, 167, 255, .34)',
        goldglow: '0 0 42px rgba(245, 166, 35, .45)',
      },
      backgroundImage: {
        'track-grid':
          'linear-gradient(rgba(28,167,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(28,167,255,.08) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '.55', transform: 'scale(.98)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        scan: {
          '0%': { transform: 'translateX(-45%)' },
          '100%': { transform: 'translateX(45%)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.5s ease-in-out infinite',
        scan: 'scan 6s linear infinite alternate',
      },
    },
  },
  plugins: [],
}
