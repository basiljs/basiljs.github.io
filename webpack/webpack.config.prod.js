const Webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "production",
  watch: false,
  devtool: "source-map",
  stats: "errors-only",
  bail: true,
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash:8].chunk.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
