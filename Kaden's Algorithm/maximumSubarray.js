/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) => {
    if(nums.length == 0) return 0
    if(nums.length == 1) return nums[0]
    // hold the temporary largest value
    let largest = nums[0]
    // hold the largest sum with current value
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        sum += nums[i]
        // update the largest sum with current value
        if(sum < nums[i]) {
            sum = nums[i]
        }
        // compare the temporary largest value and largest sum with current value
        if(sum > largest) {
            largest = sum
        }
        
    }
    return largest
};