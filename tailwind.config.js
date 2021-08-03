const isProduction = process.env.NODE === 'production';

module.exports = {
  purge: {
    enabled: isProduction,
    content: ['index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FDF6E3',
        'accent-light': '#EEE8D5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
