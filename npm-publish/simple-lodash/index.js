const dotenv = require("dotenv");
dotenv.config();
module.exports = require("./lib/app.js");
require("@babel/polyfill"); //引入该bable插件主要可以转换高级的实例上api，includes
// function log(target) {
//   return function decorator(target) {
//     console.log(2222, target);
//   };
// }

// @log("looper")
// class A {
//   a = 111111;
// }

// let b = new A();
// console.log("bbbbb", b);
