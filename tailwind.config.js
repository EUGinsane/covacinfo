const isProduction = process.env.NODE === 'production';

module.exports = {
  purge: {
    enabled: isProduction,
    content: ['index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
