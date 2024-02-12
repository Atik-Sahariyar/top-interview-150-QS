/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    for (let l = 0, r = height.length - 1; l < r;) {
        if (height[l] > height[r]) {
            max = Math.max(max, height[r] * (r - l));
            r--;
        } else {
            max = Math.max(max, height[l] * (r - l));
            l++;
        }
    }
    return max;
};
