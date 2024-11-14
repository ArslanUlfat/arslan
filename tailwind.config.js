module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsla(0, 0%, 100%, 1)',
        cultured: 'hsla(220, 20%, 97%, 1)',
        snow: 'hsla(345, 57%, 97%, 1)',
        manatee: 'hsla(219, 10%, 62%, 1)',
        'black-coral': 'hsla(220, 12%, 43%, 1)',
        'cinnamon-satin': 'hsla(344, 53%, 62%, 1)',
        'raisin-black': 'hsla(216, 14%, 14%, 1)',
        gunmetal: 'hsla(214, 15%, 21%, 1)',
        charcoal: 'hsla(219, 22%, 26%, 1)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'fs-1': 'calc(2.7rem + 1.38vw)',
        'fs-2': 'calc(2.6rem + .66vw)',
        'fs-3': 'calc(2.6rem + .24vw)',
        'fs-4': '1.9rem',
        'fs-5': '1.8rem',
        'fs-6': '1.7rem',
        'fs-7': '1.5rem',
        'fs-8': '1.4rem',
      },
      boxShadow: {
        'shadow-1': '0 0 20px hsla(216, 14%, 14%, 0.05)',
        'shadow-2': '0 4px 28px hsla(216, 14%, 14%, 0.07)',
      },
      borderRadius: {
        circle: '50%',
        pill: '100px',
        'radius-8': '8px',
        'radius-6': '6px',
      },
      transitionTimingFunction: {
        'transition-1': '0.25s ease',
        'transition-2': '0.5s ease',
        'transition-3': '0.3s ease-in-out',
      },
    },
  },
  plugins: [],
} 