module.exports = {
  mode: 'jit',
  purge: ['./**.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['OpenDyslexia', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
