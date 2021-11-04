## **simple-lodash-fun**

[![Build Status](https://www.travis-ci.com/zhuominlooper/2021-javascript.svg?branch=main)](https://www.travis-ci.com/zhuominlooper/2021-javascript)
[![npm downloads](https://img.shields.io/npm/dm/simple-lodash-fun.svg)](https://www.npmjs.com/package/simple-lodash-fun)
[![npm version](https://img.shields.io/npm/v/simple-lodash-fun.svg)](https://www.npmjs.com/package/simple-lodash-fun)
![node](https://img.shields.io/badge/node%40latest-%3E%3D%206.0.0-brightgreen)

[![check Status](https://img.shields.io/badge/checks-passing-brightgreen)](https://github.com/zhuominlooper/2021-javascript/pulls)
[![tests Status](https://img.shields.io/badge/test-passing-brightgreen)](https://coveralls.io/github/zhuominlooper/2021-javascript)
[![Coverage Status](https://coveralls.io/repos/github/zhuominlooper/2021-javascript/badge.svg?branch=dev)](https://coveralls.io/github/zhuominlooper/2021-javascript?branch=dev)

![gitter chat](https://img.shields.io/gitter/room/mzabriskie/simple-lodash-fun.svg)
![license](https://img.shields.io/badge/license-MIT-green)
[![author](https://img.shields.io/badge/author-looper.zhuo-orange)](https://github.com/zhuominlooper)

---

## **NPM Installation**

- 全局安装:npm i -g simple-lodash-fun
- 本地安装:npm i simple-lodash-fun -D
- 产线安装:npm i simple-lodash-fun -S

---

## **CDN Installation**

```javascript
<script src="https://cdn.jsdelivr.net/npm/simple-lodash-fun/dist/index.umd.min.js"></script>
```

---

## **Current Function**

| 函数名称           |                           函数作用 | 是否测试通过 | 创建时间  |
| ------------------ | ---------------------------------: | -----------: | :-------: |
| accurateType       |                   准确判断数据类型 |          YES | 2021/7/10 |
| pseudoArr2Array    |                     伪数组转真数组 |          YES | 2021/7/10 |
| deepClone          |                             深拷贝 |          YES | 2021/7/12 |
| convertDimensional |                 多维数组转一维数组 |          YES | 2021/7/14 |
| counterfeitSort    |                           冒泡排序 |          YES | 2021/7/15 |
| trim               |                           去掉空格 |          YES | 2021/7/18 |
| arrNumSum          |                       数组数值总和 |          YES | 2021/7/28 |
| arrNumMax          |                         数组最大值 |          YES | 2021/7/28 |
| arrNumMin          |                         数组最小值 |          YES | 2021/7/28 |
| compact            |               返回数组中的非假数值 |          YES | 2021/7/30 |
| getImgInstance     | 判断是否是有效 url 并返回 img 实例 |          YES | 2021/7/30 |
| throttle           |                               节流 |          YES | 2021/8/4  |
| debounce           |                               防抖 |          YES | 2021/8/4  |

---

## **Browser Support**

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 11 ✔                                                                                                                         |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

---

## **Example**

```javascript
nodeJs：
const fun = require("simple-lodash-fun");
console.log(fun.accurateType(null)); //Null
console.log(fun.accurateType([])); //Array
```

```javascript
ES6：
import * as _ from "simple-lodash-fun";
console.log(_.accurateType(null)); //Null
console.log(_.accurateType([])); //Array
```

---

```javascript
window：
 <script src="https://cdn.jsdelivr.net/npm/simple-lodash-fun/dist/index.umd.min.js"></script>
console.log(window['myLodash'].accurateType(null)); //Null
console.log(window['myLodash'].accurateType([])); //Array
```

---

## **License**

### MIT

---

## **Npm DevDependents**

```javascript
@babel/cli
@babel/core
@babel/preset-env
babel-loader
chai
cross-env
eslint
eslint-config-airbnb-basees
lint-plugin-import
jest
mocha
mochawesome
webpack
webpack-cli
nyc
```

---

## **Engineering**

 <img src="https://user-gold-cdn.xitu.io/2018/5/13/163583bef8f07f05?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" width=556 height=256 />

---

## **Versions**

```javascript
v-1.2.4(2021/11/4)
tag:修改文件结构，添加方法的接口引用

v-1.2.4(2021/8/4)
tag:实现防抖节流函数，新增在node环境下和window下的异常处理机制

v-1.2.3(2021/7/31)
tag:实现CDN打包在浏览器下直接运行，并优化打包，实现在浏览器下访问process全局变量

v-1.2.2(2021/7/28)
tag:添加数组的求和，最大值，最小值的方法，获取图片实例等方法

v-1.2.1(2021/7/24)
tag:CI脚本能进行正常的环境变量支持

v-1.2.0(2021/7/17)
tag:整理CI脚本支持环境变量

v-1.1.9(2021/7/17)
tag:CI脚本添加CDN打包更新

v-1.1.8(2021/7/17)
tag:成功配置一套完整的自动化构建脚本

v-1.1.7(2021/7/17)
tag:配置自动化测试CI脚本

v-1.1.6(2021/7/17)
tag:配置CI脚本支持自动化发布

v-1.1.6(2021/7/17)
tag:初始化CI配置和.env配置

v-1.1.5(2021/7/16)
tag:修改babelrc的配置，支持es5以上的高级特性语法

v-1.1.4(2021/7/15)
tag:采用整合的方式导出函数

v-1.1.3(2021/7/15)
tag:拆分包文件，统一导出方法，整理文件夹，添加了冒泡排序

v-1.1.2(2021/7/14)
tag:添加convertDimensional函数，实现多维数组转一维，目前仅支持全部number或者String的多维数组转为number的一维数组

v-1.1.1(2021/7/12)
tag:添加了几个常用函数并测试,添加cdn包

v-1.1.0(2021/7/10)
tag:初始化webpack,test工具,搭建好环境并上传到npm

v-1.0.0(2021/7/10)
tag:初始化包


```

---

## **Collaborators**

### **[looper.zhuo](https://github.com/zhuominlooper)**

---
