/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices.length) return 0;
    let mxProfit = 0;
    let k = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] > prices[k]){
            let profit = prices[i] - prices[k];
            mxProfit = Math.max(mxProfit, profit)
        } else {
            k = i;
        }
    }
  return mxProfit;
};

