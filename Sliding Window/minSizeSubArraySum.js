/*209. Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    let maxNum = Math.max(...nums);
    if(maxNum === target) return 1;
    
    let i = 0;
    let j = 0;
    let len = Infinity
    let sum = 0;

    for(const num of nums){
        sum += num;
        i++

        while(sum >= target){
            len = Math.min(len, i - j)

            sum -= nums[j];
            j++
        }
    }

   return len === Infinity ? 0 : len    

};