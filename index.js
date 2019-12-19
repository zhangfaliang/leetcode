var singleNumber = function(nums) {
    for(var i=0;i<nums.length;i++){
      if(nums.indexOf(nums[i])===nums.lastIndexOf(nums[i])){
        return nums[i]
      }
    }
};

console.log(singleNumber([1,1,2,2,3,3,4,2]))