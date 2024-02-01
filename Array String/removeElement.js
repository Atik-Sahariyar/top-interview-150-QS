/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {

    while(nums.includes(val)){
      nums.splice(nums.indexOf(val), 1)
    }
};