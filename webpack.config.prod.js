var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/
      }
    ]
  }
}