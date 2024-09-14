module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ['"Anybody"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      },
      colors: {
        'default': '#000',
        'gray-light': '#F4F4F4',
        'color': '#E63036',
        'cat-2': '#F0E2F1',
        'cat-3': '#E2F0F1',
        'cat-4': '#F1F1E2',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [],
}
