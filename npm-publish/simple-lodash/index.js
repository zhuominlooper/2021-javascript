// if (typeof window === "undefined") {
//   //判断当前是node环境，则加载环境环境变量
//   const dotenv = require("dotenv");//process变量只能在node环境识别，浏览器下undefined
//   dotenv.config();
// }
module.exports = require("./lib/app.js");
require("@babel/polyfill"); //引入该bable插件主要可以转换高级的实例上api，includes
