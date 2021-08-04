//判断当前的环境并且监听未捕获的全局异常
const chalk = require("chalk");
const error = chalk.bold.red;
const warning = chalk.bold.yellow;
if (typeof window === "undefined") {
  //node环境
  process.on("uncaughtException", function (err) {
    console.log(warning("The current environment is Node"));
    console.log(error(err.message || "throw Exception"));
  }); //监听未捕获的异常
  process.on("unhandledRejection", function (err) {
    console.log(warning("The current environment is Node"));
    console.log(error(err.message || "throw Exception"));
  }); //监听Promise没有被捕获的失败函数
} else {
  //window环境
  window.onerror = () => {
    console.warn("The current environment is Window");
    return false;
  }; //如果返回值为false则在控制台 (JavaScript console) 中显示错误消息。反之则不会
}
