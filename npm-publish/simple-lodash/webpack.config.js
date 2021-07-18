const path = require("path");
const isMinPack = process.env.NODE_ENV.includes("min");
const type = process.env.NODE_ENV.replace(/:.*/g, "");
const libraryTarget = type;
const config = {
  target: "node",
  mode: isMinPack ? "production" : "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `index.${type}${isMinPack ? ".min" : ""}.js`,
    library: "simple-lodash",
    libraryTarget: libraryTarget,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, "lib"),
        use: "babel-loader", //bable是从右向左，从下到上执行
      },
    ], //es6转es5
  },
  plugins: [],
};

module.exports = config;
