module.exports = {
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#F5E9E3',
     'b-p': '#E9C0AC',
     'b-b': '#99A9B4',
     'b-n': '#253D55',
     'b-y': '#E2B15F',
    }),
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#F5E9E3',
      'b-p': '#E9C0AC',
      'b-b': '#99A9B4',
      'b-n': '#253D55',
      'b-y': '#E2B15F',
  },
  fontFamily: {
      'button': ['Poiret One', 'cursive'],
      'title': [ 'Prata', 'serif'],
      'para':['Quattrocento Sans', 'sans-serif']
    },
    borderColor: theme => ({
    default: theme('colors.gray.300', 'currentColor'),
    'primary': '#253D55',
            })
},
purge: false,
darkMode: false,
variants: {
  extend: {},
},
plugins: [
  require('@tailwindcss/typography'),
],
}
