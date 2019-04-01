const path = require('path')

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'js')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
       {
         test: /\.scss$/,
         use: [{
         loader: 'style-loader'
         }, {
           loader: 'css-loader'
         }, {
           loader: 'sass-loader'
         }]
       }
    ]
  }
}