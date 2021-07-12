const chalk = require("chalk");

const error = chalk.bold.red;
// const warning = chalk.bold.yellow;

// 1.判断js数据的准确类型
function accurateType(data) {
  try {
    return Object.prototype.toString.call(data).split(" ")[1].replace("]", "");
  } catch (err) {
    console.log(error(`accurateType ERROR! ${err}`));
    return "NAN";
  }
}

// 2.将伪数组转真数组,如果转换失败则报错
function pseudoArr2Array(data) {
  try {
    return Array.prototype.slice.call(data);
  } catch (err) {
    console.log(error(`pseudoArr2Array ERROR! ${err}`));
    return [];
  }
}

// 3.深拷贝的实现
function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }
  let result;
  if (Object.prototype.toString.call(value) === "[object Object]") {
    result = {};
  }
  if (Object.prototype.toString.call(value) === "[object Array]") {
    result = [];
  }
  for (let data in value) {
    result[data] = deepClone(value[data]);
  }
  return result;
}

module.exports = {
  accurateType,
  pseudoArr2Array,
  deepClone,
};
