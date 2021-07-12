const path = require("path");
const isMinPack = process.env.NODE_ENV.includes("min");
const type = process.env.NODE_ENV.replace(/:.*/g, "");
const libraryTarget = type;
const config = {
  mode: isMinPack ? "production" : "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `index.${type}${isMinPack ? ".min" : ""}.js`,
    library: "simple-lodash",
    libraryTarget: libraryTarget,
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  plugins: [],
};

module.exports = config;
