/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length; 
    if(!n) return 0;

    let j = 0;
    for(let i = 1; i < n; i++){
        if(nums[j] !== nums[i]){
            nums[++j] = nums[i];
        }
    }

    return j + 1
};