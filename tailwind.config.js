const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/*.{js,jsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primaryborder: 'var(--color-primaryborder)',
    }),
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sub: [
        '0.775rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '0.775rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '0.975rem',
        },
      ],
      base: [
        '1rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.5rem',
        },
      ],
      title: [
        '1.175rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '2.225rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '2.175rem',
        },
      ],
      xl: [
        '3rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '2.875rem',
        },
      ],
    },
    fontWeight: {
      bold: 500,
    },

    letterSpacing: {
      DEFAULT: '-3%',
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      yellow: colors.amber,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      indigo: colors.indigo,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        slab: ['"Roboto Slab"', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        accent: 'var(--color-bg-accent)',
        accentsub: 'var(--color-bg-accentsub)',
      },
      backgroundImage: {},
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        accent: 'var(--color-bg-accent)',
      },

      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus'],
      textColor: ['active', 'hover', 'focus'],
      button: ['active', 'hover'],
      lineCramp:['hover']
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
