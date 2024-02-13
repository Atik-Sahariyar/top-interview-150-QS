/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum =  (nums) => {
    nums.sort((a, b) => a - b);
    let result = [];

    nums.forEach((v, i) => {
        if (i > 0 && v === nums[i - 1]) return;
        let l = i + 1; r = nums.length - 1;
        while (l < r) {
            let three_sum = v + nums[l] + nums[r];
            if (three_sum > 0) {
                r--
            } else if (three_sum < 0) {
                l++
            } else {
                result.push([v, nums[l], nums[r]])
                l++
                while (nums[l] == nums[l - 1] && l < r) l++
            }
        }
    });

    return result
};