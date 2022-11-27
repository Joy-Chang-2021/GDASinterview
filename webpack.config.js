const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    index: './src/js/index.js',
    locker: './src/js/locker.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js'
  },
}