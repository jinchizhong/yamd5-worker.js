var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'yamd5-worker.min.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
