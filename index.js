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
console.log(maxProfit([1,4,5,6,7]));
