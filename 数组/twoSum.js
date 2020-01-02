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
/**
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

示例 1:

输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.
示例 2:

输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
示例 3:

输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/third-maximum-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} nums
 */
const thirdMax = function(nums) {
  let current = null;
  let num = 0;
  nums.sort((a, b) => b - a);
  for (item of nums) {
    if (current !== item) {
      current = item;
      num++;
      if (num === 3) return item;
    }
  }

  if (num < 3) return nums[0];
};
/**
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  const maxNum = nums.length;
  const res = [];
  for (let i = 0; i < maxNum; i++) {
    if (nums.indexOf(i + 1) < 0) {
      res.push(i + 1);
    }
  }
  return res;
};
