const path = require('path'),
  VueLoaderPlugin = require('vue-loader/lib/plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './client/main.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/'
  }
}