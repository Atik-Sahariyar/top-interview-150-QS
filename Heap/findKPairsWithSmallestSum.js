/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

const kSmallestPairs = (nums1, nums2, k) => {
    let heap = new MinPriorityQueue({ priority: x => x[0] });

    for (let i = 0; i < nums1.length; i++) {
        let sum = nums1[i] + nums2[0];
        heap.enqueue([sum, i, 0]);
    }

    let res = [];

    // console.log(map);

    while (!heap.isEmpty() && k > 0) {
        const [sum, i, j] = heap.dequeue().element;

        res.push([nums1[i], nums2[j]]);

        if (res.length === k) return res;

        if (j < nums2.length - 1) {
            heap.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }
    return res;
};