/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length;
    if (!n) return 0;

    while (n <= k) {
        k = k - n;
    }
    const temp = nums.splice(0, n - k);
    const rotateArray = nums.push(...temp);

    return rotateArray
};