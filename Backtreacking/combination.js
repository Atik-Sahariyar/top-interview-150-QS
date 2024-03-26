/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    const backtrack = (first = 1, arr = []) => {
        if (arr.length == k) {
            output.push([...arr])
        }
        if (arr.length < k)
            for (let i = first; i <= n; i++) {
                arr.push(i);
                backtrack(i + 1, arr);
                arr.pop();
            }
    }

    let output = [];
    backtrack();
    return output;
};