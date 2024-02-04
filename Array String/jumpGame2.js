/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
    const n = nums.length;
    if(n === 1) return 0;

    let jump = 0;
    let result = 0;
    let j = 0;

    for(let i = 0; j < n - 1; i++){
        jump = Math.max(jump, nums[i] + i);
        if(i === j ){
            j = jump;
            result++
        }
    }
    return result
};