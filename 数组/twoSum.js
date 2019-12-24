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
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

来源：力扣（LeetCode）
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
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定数组 nums = [1,1,2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

 */
/**
 * @param {number[]} nums
 * @return {number}
 * 注意这是一个排序好的数组，很重要， 思路已知数组已排序，那么只要保证数组的前一个不等于后一个就可以搞定
 * 空间复杂度 o1
 * 时间复杂度 on
 */
var removeDuplicates = function(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1] || i + 1 === nums.length) {
      nums[index++] = nums[i];
    }
  }
  return index;
};

/**
 *
 * @param {罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:

输入: "III"
输出: 3
示例 2:

输入: "IV"
输出: 4
示例 3:

输入: "IX"
输出: 9
示例 4:

输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
示例 5:

输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
。} s
 */

var romanToInt = function(s) {
  const enumerationObj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const current = s[i];
    if (i > 0) {
      const specialCurrent = `${s[i - 1]}${s[i]}`;
      if (specialCurrent in enumerationObj) {
        res += enumerationObj[specialCurrent];
        i -= 1;
        continue;
      }
      res += enumerationObj[current];
      continue;
    }
    res += enumerationObj[current];
  }

  return res;
};

var removeDuplicates = function(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1] || i + 1 === nums.length) {
      nums[index++] = nums[i];
    }
  }
  return index;
};

var romanToInt = function(s) {
  const enumerationObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res = 0;
  let pre = enumerationObj[s[0]];
  for (let i = 1; i < s.length; i++) {
    const value = enumerationObj[s[i]];
    if (value > pre) {
      res -= pre;
    } else {
      res += pre;
    }
    pre = value;
  }
  res += pre;
  return res;
};

/**
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1:

给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,1,2,2,3,0,4,2], val = 2,

函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素。
说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[sum] = nums[i];
      sum++;
    }
  }
  return sum;
};

/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0

来源：力扣（LeetCode）
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);
    const mid = nums[midIndex];
    if (mid === target) {
      return midIndex;
    }
    if (mid > target) {
      end = midIndex - 1;
    } else {
      start = midIndex + 1;
    }
  }
  return start;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert1 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

const searchInsert2 = function(nums, target) {
  let s = 0;
  let e = nums.length;
  while (s < e) {
    const m = parseInt((e + s) / 2);
    if (nums[m] < target) {
      s = m + 1;
    } else {
      e = m;
    }
  }
  return s;
};
