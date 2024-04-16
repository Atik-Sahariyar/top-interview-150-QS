/**
 * @param {number[]} nums
 * @return {number}
 */

const findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        nums[mid] < nums[mid + 1] ? left = mid + 1 : right = mid;
    }
    return left;
};