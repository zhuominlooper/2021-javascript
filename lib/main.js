const chalk = require("chalk");
const warning = chalk.bold.yellow;

// 1.判断js数据的准确类型
function accurateType(data) {
  return Object.prototype.toString.call(data).split(" ")[1].replace("]", "");
}

// 2.将伪数组转真数组,如果转换失败则报错
function pseudoArr2Array(data) {
  return Array.prototype.slice.call(data);
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
  return arr
    .join()
    .split(",")
    .map((value) => {
      return Number(value);
    });
}

//5. 实现trim的功能，不需要做判断，
function trim(value) {
  return value ? (value.trim() ? value.trim() : "") : "";
}

// 6.判断一张图片是否可加载，如果可以则返回img对象,并可以配置属性
function getImgInstance(url, options = { alt: "加载失败" }) {
  if (typeof window === "object") {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = url;
      img.onload = () => {
        options.width && typeof options.width === "number"
          ? (img.width = String(options.width < 4 ? 4 : options.width))
          : null;
        options.height && typeof options.height === "number"
          ? (img.height = String(options.height < 4 ? 4 : options.height))
          : null;
        resolve(img);
      };
      img.onerror = () => {
        reject("加载失败");
      };
    });
  } else {
    console.log(
      warning(
        `accurateType WARNING! GetImgInstance() does not support the node environment`
      )
    );
    return Promise.reject("加载失败");
  }
}

// 7.防抖实现
function debounce(fun, deley = 100) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fun();
    }, deley);
  };
}

// 8.节流的实现
function throttle(fun, deley = 100) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fun();
      timer = null;
    }, deley);
  };
}

module.exports = {
  debounce,
  throttle,
  getImgInstance,
  trim,
  accurateType,
  pseudoArr2Array,
  deepClone,
  convertDimensional,
};
