>>给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

>>你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

>>示例:

>>>>给定 nums = [2, 7, 11, 15], target = 9

>>>>因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```javaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = [];
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    const complementIndex = obj[target - nums[i]];
    if (complementIndex >= 0) {
      result.push(complementIndex, i);
      break;
    }
    obj[nums[i]] = i;
  }
  return result;
};

```


>>给定一个字符串，找出不含有重复字符的最长子串的长度。

>>示例 1:

>>>>输入: "abcabcbb"
>>>>输出: 3 
>>>>解释: 无重复字符的最长子串是 "abc"，其长度为 3。
>>>>示例 2:

>>>>输入: "bbbbb"
>>>>输出: 1
>>>>解释: 无重复字符的最长子串是 "b"，其长度为 1。
>>示例 3:

>>>>输入: "pwwkew"
>>>>输出: 3
>>>>解释: 无重复字符的最长子串是 "wke"，其长度为 3。
     请注意，答案必须是一个子串，"pwke" 是一个子序列 而不是子串。

```javaScript
     /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var str = '';// 当前无重复
  var res = ''; //无重复结果
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    var index = str.indexOf(char);
    if (index === -1) {
      str += char;
      res = res.length > str.length ? res : str
    } else {       
      str =  str.slice(index+1)+char;//  向后延续截取  asdfseirtier 第一次 截取 asdfs  df
    }
  }
return res.length
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    var max = 1, flag = 0
    for(var i = 0; i < s.length; i++) {
        
        var index = s.indexOf(s[i], flag) 
        if (index !== -1 && index < i) flag = index + 1;
        
        max = Math.max(max, i - flag + 1)
    }
    return max
};

```


>>给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

>>请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

>>你可以假设 nums1 和 nums2 不同时为空。

>>示例 1:

>>>>nums1 = [1, 3]
>>>>nums2 = [2]

>>>>中位数是 2.0
>>示例 2:

>>>>nums1 = [1, 2]
>>>>nums2 = [3, 4]

>>>>中位数是 (2 + 3)/2 = 2.5

```javaScript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//~是按位取反运算，~~是取反两次
// 在这里~~的作用是去掉小数部分
// 因为位运算的操作值要求是整数，其结果也是整数，所以经过位运算的都会自动变成整数
// 除了~~n 还可以用
// n<<0
// n>>0
// n|0
// 取整
//与Math.floor()不同的是，它只是单纯的去掉小数部分，不论正负都不会改变整数部分
var findMedianSortedArrays = function(nums1, nums2) {
  // 合并数组
  var s = nums1.concat(nums2);

  // 排序
  s.sort(function(a, b) {
    return a - b;
  });

  var len = s.length;

  // 根据数组长度求中位数
  if (len%2!=0) return s[~~(len / 2)];
  else return (s[len / 2 - 1] + s[len / 2]) / 2;
};
```

>>给定一个 32 位有符号整数，将整数中的数字进行反转。

>>示例 1:

>>>>输入: 123
>>>>输出: 321
 >>示例 2:

>>>>输入: -123
>>>>输出: -321
>>示例 3:

>>>>输入: 120
>>>>输出: 21
>>>>注意:

>>>>假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。

```javascript
/**
 * @param {number} x
 * @return {number}
 */

let reverse = function(x) {
    let res = 0;
    while (x !== 0) {
        res = res * 10 + x % 10;
        x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
    }
    return res < -(2**31) || res > 2**31 - 1 ? 0 : res;
};
```
#实现 atoi，将字符串转为整数。

>>该函数首先根据需要丢弃任意多的空格字符，直到找到第一个非空格字符为止。如果第一个非空字符是正号或负号，选取该符号，并将其与后面尽可能多的连续的数字组合起来，这部分字符即为整数的值。如果第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

>>字符串可以在形成整数的字符后面包括多余的字符，这些字符可以被忽略，它们对于函数没有影响。

>>当字符串中的第一个非空字符序列不是个有效的整数；或字符串为空；或字符串仅包含空白字符时，则不进行转换。

>>若函数不能执行有效的转换，返回 0。

>>说明：

>>假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。如果数值超过可表示的范围，则返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

>>示例 1:

>>>>输入: "42"
>>>>输出: 42
>>>>示例 2:

>>>>输入: "   -42"
>>>>输出: -42
>>>>解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
>>示例 3:

>>>>输入: "4193 with words"
>>>>输出: 4193
>>>>解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
>>示例 4:

>>>>输入: "words and 987"
>>>>输出: 0
>>>>解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
>>示例 5:

>>输入: "-91283472332"
>>输出: -2147483648
>>>>解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
```javaScript

/**
 * @param {string} str
 * @return {number}
 */


var myAtoi = function(str) {
  str = str.replace(/^ +/, '');
  if (/^(\-\d|\+\d|\d)/.test(str)) { 
    str = str.replace(/^\+/g, '');
    str = Number(/^(\-\d+)|(\d+)/.exec(str)[0]);    
    if (Math.pow(2, 31)-1<str) {
      return Math.pow(2, 31)-1
    } else if(str<0&&-Math.pow(2, 31)>str) { 
      return Math.pow(-2, 31)
    }
    
    return str
  }
  return 0
};

var myAtoi = function(str) {
    var num = parseInt(str);
    if(!num){
        return 0
    }else{
        var base = Math.pow(2,31);
        num = num > base-1? base-1: num;
        num = num < -base? -base:num;
        return num
    }
};
```
#判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

>>示例 1:

>>>>输入: 121
>>>>输出: true
>>示例 2:

>>>>输入: -121
>>>>输出: false
>>>>解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
>>示例 3:

>>>>输入: 10
>>>>输出: false
>>>>解释: 从右向左读, 为 01 。因此它不是一个回文数。
进阶:

>>你能不将整数转为字符串来解决这个问题吗？

```javaScript
    /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const copyx =String(x).split('').reverse().join('');
  return copyx==x;
};
```
