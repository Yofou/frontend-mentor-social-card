import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,js,vue,html}"
  ],
  theme: {
	  colors: {
      grey: {
        300: '#6B7082',
        600: '#2E3349',
      },
      white: {
        pure: '#FFF',
        300: '#E8E9EC',
      },
      blue: {
        300: '#41CBD3',
        600: '#19A1AE',
      }
    },
    fontFamily: {
      kumbh: ['Kumbh Sans', 'sans-serif']
    }
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.heading-s': {
          fontSize: '1.125rem',
          fontFamily: theme('fontFamily.kumbh'),
        },
        '.body': {
          fontSize: '0.875rem',
          fontFamily: theme('fontFamily.kumbh'),
        },
        '.subtitle': {
          fontSize: '0.625rem',
          fontFamily: theme('fontFamily.kumbh'),
          letterSpacing: "0.09375rem",
        }
      })
    })
  ],
}

