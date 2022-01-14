module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        'gray-main': '#4E5150',
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'orange-main': '#F2994A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
