/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    if(!n) return 0;
    
    const answer = new Array(n).fill(1);

    let leftProduct = 1;
    for(let i = 1; i < n; i++){
        leftProduct *= nums[i - 1];
        answer[i] *= leftProduct;
    }

    let rightProduct = 1;
    for(let i = n -2; i >= 0; i--){
        rightProduct *= nums[i + 1];
        answer[i] *= rightProduct;
    }

    return answer
};

const nums = [2, 4, 4, 5, 6, 7, 2, 8]

const result =  productExceptSelf(nums)
console.log(result);