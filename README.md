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
#编写一个函数来查找字符串数组中的最长公共前缀。

>>如果不存在公共前缀，返回空字符串 ""。

>>示例 1:

>>>>输入: ["flower","flow","flight"]
>>>>输出: "fl"
>>示例 2:

>>>>输入: ["dog","racecar","car"]
>>>>输出: ""
>>>>解释: 输入不存在公共前缀。

>>说明:所有输入只包含小写字母 a-z 。

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let str = strs[0],
    res = '';
  if (str) {
    for (var i = 0; i < str.length; i++) {
      var charAt = str[i];
      if (strs.every(item => item[i] === str[i])) {
        res = res + str[i]
          continue
      }
        break
    };
  }
  return res
}

**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length == 0) return "";
        }
    return prefix;
};

```
#给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

>>不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

>>示例 1:

>>>>给定数组 nums = [1,1,2], 

>>>>函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

>>>>你不需要考虑数组中超出新长度后面的元素。
>>示例 2:

>>>>给定 nums = [0,0,1,1,1,2,2,3,3,4],

>>>>函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

>>>>你不需要考虑数组中超出新长度后面的元素。
>>>>说明:
>>>>为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

>>>>你可以想象内部操作如下:

>>>>// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
>>>>int len = removeDuplicates(nums);

>>>>// 在函数里修改输入数组对于调用者是可见的。
>>>>// 根据你的函数返回的长度, 它会打印出数组中该长度范>>>>围内的所有元素。
>>>>for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```javaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var  removeDuplicates= function(nums) {
    var obj={}
   for(var i=0;i<nums.length;i++){
    if(obj[nums[i]]!==undefined){
        nums.splice(i,1)
        i--
        continue
    }
        obj[nums[i]]=nums[i]
 }
    obj=null
};


```

#假设按照升序排序的数组在预先未知的某个点上进行了旋转。

>>( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

>>搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

>>你可以假设数组中不存在重复的元素。

>>你的算法时间复杂度必须是 O(log n) 级别。

>>示例 1:

>>>>输入: nums = [4,5,6,7,0,1,2], target = 0
>>>>输出: 4
>>示例 2:

>>>>输入: nums = [4,5,6,7,0,1,2], target = 3
>>>>输出: -1
```javaScript
var search = function(nums, target) {
    return  nums.indexOf(target)
};
```

#给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

>>示例:

>>>>输入: [-2,1,-3,4,-1,2,1,-5,4],
>>>>输出: 6
>>>>解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   var res=nums[0];
   var sum=nums[0]
   for(var i=1;i<nums.length;i++){
       if(res>0)res+=nums[i]
       else res=nums[i]
       if(sum<res)sum=res
   }
   return sum
};
```

#给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

>>如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

>>注意你不能在买入股票前卖出股票。

>>示例 1:

>>>>输入: [7,1,5,3,6,4]
>>>>输出: 5
>>>>解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
>>示例 2:

>>>>输入: [7,6,4,3,1]
>>>>输出: 0
>>>>解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxValue=0;
    var minValue=Number.MAX_VALUE;
    for(var i=0;i<prices.length;i++){
      if(minValue>prices[i]){
        minValue=prices[i];
      }else{
        maxValue= maxValue<prices[i]- minValue?prices[i]- minValue:maxValue;
      }
    }
    return maxValue
};
```

#给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

>>你可以假设数组是非空的，并且给定的数组总是存在众数。

>>示例 1:

>>>>输入: [3,2,3]
>>>>输出: 3
>>示例 2:

>>>>输入: [2,2,1,1,1,2,2]
>>>>输出: 2
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var foo=function(a,b){
        return a-b;
    }
    nums.sort(foo);
    var len=nums.length;
    var mid=Math.floor(len/2);
    return nums[mid];
};

```

##给定一个整数数组，判断是否存在重复元素。

>>如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

>>示例 1:

>>>>输入: [1,2,3,1]
>>>>输出: true
>>示例 2:

>>>>输入: [1,2,3,4]
>>>>输出: false
>>示例 3:

>>>>输入: [1,1,1,3,3,4,3,2,4,2]
>>>>输出: true
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    for(var i=0;i<nums.length;i++){
       if(obj[nums[i]]) {
           return true;
           break;
       }
        obj[nums[i]]=true
    }
    return false
};
```

#你和你的朋友，两个人一起玩 Nim游戏：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。

>>你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。

>>示例:

>>>>输入: 4
>>>>输出: false 
>>>>解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
     因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
  ```javascript
    /**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
   return n%4!==0
};
```

#编写一个函数，其作用是将输入的字符串反转过来。

>>示例 1:

>>>>输入: "hello"
>>>>输出: "olleh"
>>示例 2:

>>>>输入: "A man, a plan, a canal: Panama"
>>>>输出: "amanaP :lanac a ,nalp a ,nam A"

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var  str='';
    for(var i=s.length-1;i>=0;i--){
        str+=s[i];
    }
    return str
};

```