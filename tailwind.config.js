module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      'mobile-xxs': ['0.625rem', { lineHeight: '1.5' }],
      'mobile-xs': ['0.875rem', { lineHeight: '1.26' }],
      'mobile-sm': ['1rem', { lineHeight: '1.16' }],
      'mobile-md': ['1.125rem', { lineHeight: '1.21' }],
      'mobile-lg': ['1.5rem', { lineHeight: '1.23' }],
      'mobile-xl': ['1.75rem', { lineHeight: '1.25' }],
      'mobile-xxl': ['2.25rem', { lineHeight: '1.21' }], 
      'mobile-xxxl': ['2.75rem', { lineHeight: '1.21' }],
      'mobile-numbers': ['1.125rem'],

      'tablet-xxs': ['0.75rem'],
      'tablet-xs': ['0.875rem'],
      'tablet-sm': ['1rem'], 
      'tablet-md': ['1.125rem'],
      'tablet-lg': ['1.875rem'], 
      'tablet-xl': ['2.75rem'],
      'tablet-xxl': ['4rem'], 
      'tablet-xxxl': ['5rem'],
      'tablet-numbers': ['1.2rem'],

      'xxs': ['0.75rem'],
      'xs': ['0.9375rem'],
      'sm': ['1.125rem'],
      'md': ['1.5rem'],
      'lg': ['3rem'], 
      'xl': ['4.5rem'],
      'xxl': ['7.5rem'], 
      'xxxl': ['10rem'],
      'numbers': ['1.4rem'],
    },
    extend: {
      maxWidth: {
        '620': '38.75rem',
        '675': '42.1875rem',
        '1/2':'50%',
        '7/10': '70%',
        '3/4': '75%',
        '8/12': '66.66%',
        '358': '22.375rem'
      },
      minHeight: {
        'screen3/4': '75vh',
      },
      translate: {
        '4/5': '80%',
        '-4/5': '-80%',
      },
      zIndex: {
        '-1': '-1',
        '90': '90',
        '100': '100',
        '1000': '1000'
      },
      height: {
        '1px': '1px',
      },
      colors: {
        "pink": "#FFCDC1",
        "blue": "#CBE9FF",
        "green": "#E0FCB5",
        gray: {
          darkest: '#191919'
        }
      },
      inset: {
        '1/10': '10%',
        '3/10': '55%',
        '2/5': '20%',
        '3/5': '60%',
        '4/5': '80%',
      }
    }
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
      transform: ['group-hover'],
      transformOrigin: ['group-hover'],
    }
  },
  plugins: []
}
