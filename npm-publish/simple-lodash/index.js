const dotenv = require("dotenv");
dotenv.config();
module.exports = require("./lib/app.js");
require("@babel/polyfill"); //引入该bable插件主要可以转换高级的实例上api，includes
console.log(process.env.NODE_ENV);
