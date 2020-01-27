const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, 'src', 'app'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.jsx?/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    watchOptions: {
      ignored: /dist/
    }
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}
