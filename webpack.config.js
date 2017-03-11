var webpack = require('webpack')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || '8080'

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel']
  }
]

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './js/index.js'
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
  output: {
    path: 'dist',
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['./js', 'node_modules']
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: '.',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: HOST,
    port: PORT
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
