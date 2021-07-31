import { imgOptions } from "./index.interface";
/**
 * 判断js数据的准确类型
 * @param data any
 * @returns string
 */
export function accurateType(data: any): string {}

/**
 * 将伪数组转真数组
 * @param data  pseudo-array
 * @returns Array
 */
export function pseudoArr2Array(data: any): Array {}

/**
 * 深拷贝的实现
 * @param data any
 * @returns any
 */
export function deepClone(data: any): any {}

/**
 * 多维数组转一维数组
 * @param data Array
 * @returns any
 */
export function convertDimensional(data: Array): Array {}

/**
 * 冒泡排序
 * @param data Array
 * @returns Object
 */
export function counterfeitSort(data: Array): any {}

/**
 * 去掉空格
 * @param data String
 * @returns String
 */
export function trim(data: String): String {}

/**
 * 数组中的总和
 * @param data Array
 * @returns Number
 */
export function arrNumSum(data: Array): Number {}

/**
 * 数组中的最大值
 * @param data Array
 * @returns Number
 */
export function arrNumMax(data: Array): Number {}

/**
 * 数组中的最小值
 * @param data Array
 * @returns Number
 */
export function arrNumMin(data: Array): Number {}

/**
 * 返回数组中的非假数值
 * @param data Array
 * @returns Array
 */
export function compact(data: Array): Number {}

/**
 * 返回img实例
 * @param data Array
 * @returns Array
 */
export function getImgInstance(url: String, data?: imgOptions): Array {}
