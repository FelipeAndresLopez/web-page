// Process JS with Babel.
const path = require('path');

module.exports = {
  test: /\.(js|jsx|mjs)$/,
  include: path.resolve(__dirname, 'src'),
  loader: require.resolve('babel-loader'),
  options: {
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          test: './test'
        }
      }]
    ],
    cacheDirectory: true
  }
};
