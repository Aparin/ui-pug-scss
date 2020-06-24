module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {preset: [
      'default', {
        discardComments: {
          removeAll: true
        }
      }
    ]},
  }
}