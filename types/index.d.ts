const imgOptions = require("./index.interface");
/**
 * 判断js数据的准确类型
 * @param data any
 * @returns string
 */
export interface accurateType<T = any> {
  (data: T): String;
}

/**
 * 将伪数组转真数组
 * @param data  pseudo-array
 * @returns Array
 */
export interface pseudoArr2Array<T = Object, R = any> {
  (data: T): Array<R>;
}

/**
 * 深拷贝的实现
 * @param data any
 * @returns any
 */
export interface deepClone<T = any> {
  (data: T): T;
}

/**
 * 多维数组转一维数组
 * @param data Array
 * @returns any
 */
export interface convertDimensional<R = any, T = Array<R>> {
  (data: T): T;
}

/**
 * 冒泡排序
 * @param data Array
 * @returns Object
 */
export interface counterfeitSort<R = any, T = Array<R>> {
  (data: T): T;
}

/**
 * 去掉空格
 * @param data String
 * @returns String
 */
export interface trim<T = String> {
  (data: T): T;
}

/**
 * 数组中的总和
 * @param data Array
 * @returns Number
 */
export interface arrNumSum<R = any, T = Array<R>> {
  (data: T): Number;
}

/**
 * 数组中的最大值
 * @param data Array
 * @returns Number
 */
export interface arrNumMax<R = Number, T = Array<R>> {
  (data: T): R;
}

/**
 * 数组中的最小值
 * @param data Array
 * @returns Number
 */
export interface arrNumMin<R = Number, T = Array<Number>> {
  (data: T): R;
}

/**
 * 返回数组中的非假数值
 * @param data Array
 * @returns Array
 */
export interface compact<R = any, T = Array<R>> {
  (data: T): T;
}

/**
 * 返回img实例
 * @param data imgOptions
 * @returns Promise
 */
export interface getImgInstance<T = Promise> {
  (url: String, data?: imgOptions): T;
}

/**
 * 防抖的实现
 * @param fun Function
 * @param deley Number
 * @returns void
 */
export interface debounce<T = Function> {
  (fun: T, deley?: Number): void;
}

/**
 * 节流的实现
 * @param fun Function
 * @param deley Number
 * @returns void
 */
export interface throttle<T = Function> {
  (fun: T, deley?: Number): void;
}
