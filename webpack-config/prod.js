const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
// if we want to create a sseparate css file we
// need this module

module.exports = {
  watch: false,
  mode: 'production',
  devtool: 'source-map',
  target:'web',
  context: path.resolve(__dirname, '../'),
  entry: {
    reference: './assets/js/src/reference.js',
    main:'./assets/js/src/main.js'
  },
  externals: {
  },
  output: {
    path: path.resolve(__dirname, '../', './assets/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: {
        presets: ['@babel/preset-env']
      }}
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
  ]
};
