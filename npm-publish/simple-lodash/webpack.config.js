const path = require("path");
const webpack = require("webpack");
const envConfig = require("./env-localhost.js");
const isMinPack = process.env.NODE_ENV.includes("min");
const type = process.env.NODE_ENV.replace(/:.*/g, "");
const libraryTarget = type;
const config = {
  target: "web", //支持web，node，async-node...
  mode: isMinPack ? "production" : "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `index.${type}${isMinPack ? ".min" : ""}.js`,
    library: "simple_lodash", //打包导出的变量名称
    globalObject: "this", // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget, // 定义打包方式Universal Module Definition,根据环境判断打包方式同时支持在CommonJS、AMD，Script和全局变量使用
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "lib"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ], //es6转es5
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(envConfig),
    }),
  ],
};

module.exports = config;
