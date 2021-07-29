// 数组常用的方法

const chalk = require("chalk");
const error = chalk.bold.red;
// 1. 计算数组的总和
function arrNumSum(arr) {
  try {
    return arr.reduce((pre, next) => {
      typeof next === "number" ? (pre += next) : null;
      return pre;
    }, 0);
  } catch (err) {
    console.log(error(`arrNumSum ERROR! ${err}`));
  }
}

// 2. 计算数组的最大值
function arrNumMax(arr) {
  try {
    return Math.max.apply(null, arr);
  } catch (err) {
    console.log(error(`arrNumMax ERROR! ${err}`));
  }
}

// 3. 计算数组的最小值

function arrNumMin(arr) {
  try {
    return Math.min.apply(null, arr);
  } catch (err) {
    console.log(error(`arrNumMin ERROR! ${err}`));
  }
}

// 4.创建一个新数组，返回值是原来数组的非假数值
function compact(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((pre, next) => {
      next && pre.push(next);
      return pre;
    }, []);
  }
  return arr;
}

module.exports = {
  compact,
  arrNumMin,
  arrNumMax,
  arrNumSum,
};
