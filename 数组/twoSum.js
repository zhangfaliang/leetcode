/** *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 思路： 通过 for循环数组的某项，然后使用target-当前项得到要查找的某项，使用数组的内置函数查找
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const afterIndex = nums.indexOf(target - nums[i]);
    if (afterIndex > -1 && afterIndex !== i) return [i, afterIndex];
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度最低 利用对的属性保存要查找的value，使用targetValue-currentValue 得到要查找的值，然后里 key in Object的属性
 */
var twoSum = function(nums, target) {
  const findObj = {};
  for (let i = 0; i < nums.length; i++) {
    const findValue = target - nums[i];
    if (findValue in findObj) {
      return [findObj[findValue], i];
    }
    findObj[nums[i]] = i;
  }
};

/**
 * @param {number} x
 * @return {boolean}
 * 解题思路
利用使用while 结合x%10的余数，赋值给一个变量*10累加实现数组翻转，值得注意的一点是要判断不断让x/10 取整数

 */
const isPalindrome = function(x) {
  let s = 0;
  let x1 = x;
  while (x1 > 0) {
    s = s * 10 + (x1 % 10);
    x1 = parseInt(x1 / 10);
  }
  return s == x;
};
