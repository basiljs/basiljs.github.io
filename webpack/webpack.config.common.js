const path = require("path");
// const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");
// const spawn = require("child_process").spawn;
// const LiveReloadPlugin = require("webpack-livereload-plugin");
// const WebSocket = require("ws");
// eslint-disable-next-line no-undef
module.exports = {
  target: "web",
  plugins: [],
  context: path.resolve(__dirname, "../"),
  entry: [
    "./_source/assets/js/src/reference.js",
    "./_source/assets/js/src/main.js",
    "./_source/assets/ts/index.ts",
    "./_source/assets/css/styles.scss"
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      name: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
              outputPath: "../css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader?-url&sourceMap=true"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                ctx: {
                  cssnano: process.env.NODE_ENV === "production" ? {} : false
                }
              }
            }
          },
          { loader: "sass-loader" }
        ]
      }
      // {
      //   test: /\.tsx?$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/
      // }
    ]
  },
  resolve: {
    extensions: [/*".tsx", ".ts",*/ ".js"]
  },
  output: {
    path: path.resolve(__dirname, "../_source/assets/js"),
    filename: "[name].bundle.js"
  }
};
