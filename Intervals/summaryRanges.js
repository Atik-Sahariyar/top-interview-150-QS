/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let left = nums[0];

    for(let i = 1; i <= nums.length; i++){
        if((nums[i-1] + 1) !== nums[i]){
            if(left === nums[i-1]){
                result.push(`${left}`)
            }else {
             result.push(`${left}->${nums[i-1]}`);
            }
            left = nums[i]
        }
    }

    return result;
};