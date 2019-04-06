const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
// if we want to create a sseparate css file we
// need this module

module.exports = {
  watch: true,
  mode: 'development',
  devtool: 'source-map',
  target:'web',
  context: path.resolve(__dirname, '../'),
  entry: {
    reference: './_source/assets/js/src/reference.js',
    main:'./_source/assets/js/src/main.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: path.resolve(__dirname, '../', './_source/assets/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: {
        presets: ['@babel/preset-env']
      }}
    ]
  },
  // if we want to refernce our css within the js this is the way to go
  // but it seems a bit odd to require('style.css') in a css file.
  // Still - this would add the css to the head of the index.html file
  // module: {
  //   loaders: [
  //           {test: /\.css$/, loader: 'style-loader!css-loader'}
  //   ]
  // },
  // devServer: {
  //   contentBase: path.resolve(__dirname, './')  // New
  // },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ]
};
