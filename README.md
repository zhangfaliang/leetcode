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