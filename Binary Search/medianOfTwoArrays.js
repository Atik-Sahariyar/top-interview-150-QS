/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays =  (nums1, nums2) => {

    let arr = nums1.concat(nums2);
    let sort = arr.sort(function (a, b) { return a - b })

    let len = arr.length;

    return len % 2 !== 0 ? arr[(len / 2) - 0.5] : (arr[len / 2] + arr[(len / 2) - 1]) / 2;
};