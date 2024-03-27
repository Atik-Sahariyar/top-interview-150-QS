/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute =  (nums) => {
    const permutations = [];

    function backtrack(start) {
        if (start === nums.length) {
            permutations.push([...nums]);
        } else {
            for (let i = start; i < nums.length; i++) {
                [nums[start], nums[i]] = [nums[i], nums[start]];
                backtrack(start + 1);
                [nums[start], nums[i]] = [nums[i], nums[start]];
            }
        }
    }

    backtrack(0);
    return permutations;
};