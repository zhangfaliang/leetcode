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