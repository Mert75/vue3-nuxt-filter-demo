const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  container: {
    center: true,
  },
  theme: {
    extend: {
      colors: {
        light: colors.white,
        dark: colors.zinc[900],
        outlineDark: colors.zinc[800],
        outlineLight: colors.gray[200],
        smoke: '#a6abc7',
        primary: {
          DEFAULT: '#090',
          light: '#e6f9f0',
          active: {
            DEFAULT: '#0a0',
            light: '#e6f9f0',
          },
        },
        success: {
          DEFAULT: '#34ce95',
          light: '#e6f9f0',
        },
        warning: {
          DEFAULT: '#fdb935',
          light: '#fdf2d9',
        },
        error: {
          DEFAULT: '#f44336',
          light: '#ffebee',
        },
        info: {
          DEFAULT: '#42a7d4',
          light: '#e8f7ff',
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
