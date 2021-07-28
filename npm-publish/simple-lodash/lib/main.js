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

// 4. 多维数组转为一维数组， 目前仅支持全部 Number -> Ndumber, String -> Number
function convertDimensional(arr) {
  try {
    return arr
      .join()
      .split(",")
      .map((value) => {
        return Number(value);
      });
  } catch (err) {
    console.log(error(`convertDimensional ERROR! ${err}`));
    return [];
  }
}

//5. 实现trim的功能，不需要做判断，
function trim(value) {
  try {
    return value ? (value.trim() ? value.trim() : "") : null;
  } catch (err) {
    console.log(error(`trim ERROR! ${err}`));
    return null;
  }
}

// 6. 计算数组的总和
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

// 7. 计算数组的最大值
function arrNumMax(arr) {
  try {
    return Math.max.apply(null, arr);
  } catch (err) {
    console.log(error(`arrNumMax ERROR! ${err}`));
  }
}

// 8. 计算数组的最小值

function arrNumMin(arr) {
  try {
    return Math.min.apply(null, arr);
  } catch (err) {
    console.log(error(`arrNumMin ERROR! ${err}`));
  }
}

module.exports = {
  arrNumMin,
  arrNumMax,
  arrNumSum,
  trim,
  accurateType,
  pseudoArr2Array,
  deepClone,
  convertDimensional,
};
