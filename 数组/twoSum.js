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

/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

来源：力扣（LeetCode）
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 常规思路
 */
const maxSubArray = function(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      current += nums[j];
      max = Math.max(max, nums[j], current);
    }
  }
  return max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray1 = function(nums) {
  let max = nums[0];
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    max = Math.max(current, max);
  }
  return max;
};
/**
 *
 * @param {给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:

输入: "Hello World"
输出: 5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/length-of-last-word
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。}
 */
const lengthOfLastWord = function(s) {
  const srtArr = s.replace(/(^ +| +$)/g, '').split(' ');
  return srtArr[srtArr.length - 1].length;
};

/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};
/**
 *
 * @param {给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。} digits
 */

const plusOne = function(digits) {
  const len = digits.length - 1;
  return addOne(digits, 1, len);
};
function addOne(digits, addNum, index) {
  if (index === -1 && addNum != 0) {
    digits.unshift(1);
    return digits;
  }
  if (digits[index] + addNum === 10) {
    digits[index] = 0;
    return addOne(digits, 1, --index);
  }
  digits[index] = digits[index] + addNum;
  return digits;
}
/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。


在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        res[i].push(1);
        continue;
      }
      res[i].push(res[i - 1][j - 1] + res[i - 1][j]);
    }
  }
  return res;
};

/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。


在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  const res = [];
  for (let i = 0; i <= rowIndex; i++) {
    res[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        res[i].push(1);
        continue;
      }
      res[i].push(res[i - 1][j - 1] + res[i - 1][j]);
    }
  }
  return res[rowIndex];
};

/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(prices[i] - min, profit);
  }
  return profit;
};

/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit1 = function(prices) {
  let profit = 0;
  let min = prices[0];
  let reprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    profit = Math.max(prices[i] - min, profit);
    if (prices[i] - prices[i - 1] > 0) {
      reprofit += prices[i] - prices[i - 1];
    }
  }
  return reprofit > profit ? reprofit : profit;
};
/**
 *
 * @param {*} numbers
 * @param {*} target
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const twoSum1 = function(numbers, target) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    const current = target - numbers[i];

    if (numbers[i] in map) {
      return [map[numbers[i]], i];
    }
    map[current] = i;
  }
};
/**
 *
 * @param {*} nums
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const ajorityElement = function(nums) {
  const map = {};
  let ele;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] = map[nums[i]] + 1;
      continue;
    }
    map[nums[i]] = 1;
  }
  for (const key in map) {
    if (map[key] > max) {
      max = map[key];
      ele = key;
    }
  }
  return ele;
};
const majorityElement = function(nums) {
  const majority = nums.length / 2;
  let count = 0;
  let currNum;
  for (const v of nums) {
    if (count == 0) {
      currNum = v;
    }
    count += v == currNum ? 1 : -1;
  }
  return currNum;
};
/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  const cutOutNum = k % nums.length;
  const cutOuArray = nums.splice(-cutOutNum, cutOutNum);
  nums.unshift(...cutOuArray);
};
/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
在真实的面试中遇到过这道题

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const moveZeroes = function(nums) {
  const { length } = nums;
  let currentIndex = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] != 0) {
      nums[currentIndex] = nums[i];
      if (currentIndex != i) {
        nums[i] = 0;
      }
      currentIndex++;
    }
  }
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
/**
 * 给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:

输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
注意：

输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-consecutive-ones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} nums
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let current = 0;
  for (const item of nums) {
    if (item == 1) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }
  return max;
};

/**
 * 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.

示例 1:

输入: [3, 1, 4, 1, 5], k = 2
输出: 2
解释: 数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个1，但我们只应返回不同的数对的数量。
示例 2:

输入:[1, 2, 3, 4, 5], k = 1
输出: 4
解释: 数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。
示例 3:

输入: [1, 3, 1, 5, 4], k = 0
输出: 1
解释: 数组中只有一个 0-diff 数对，(1, 1)。
注意:

数对 (i, j) 和数对 (j, i) 被算作同一数对。
数组的长度不超过10,000。
所有输入的整数的范围在 [-1e7, 1e7]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/k-diff-pairs-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function findPairs(nums, k) {
  if (k < 0) return 0;
  nums.sort((a, b) => a - b);
  let start = 0;
  let count = 0;
  let prev = Number.MAX_VALUE;
  for (let i = 1; i < nums.length; i++) {
    if (prev == nums[start] || nums[i] - nums[start] > k) {
      start++;
      if (start != i) {
        i--;
      }
    } else if (nums[i] - nums[start] == k) {
      prev = nums[start];
      start++;
      count++;
    }
  }
  return count;
}

console.log(findPairs([1, 1, 1, 2, 1], 1));
