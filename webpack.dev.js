const merge = require('webpack-merge'),
  common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/'
  }
});