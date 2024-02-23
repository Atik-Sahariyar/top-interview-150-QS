/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    const p = points.sort((a, b) => a[0] - b[0])
    let stack = []

    for (let range of p) {
        const slen = stack.length
        if (slen > 0 && stack[slen - 1][1] >= range[0]) {
            const topStack = stack.pop()
            const lastStartPoint = topStack[0]
            const lastEndPoint = topStack[1]
            stack.push([Math.max(range[0], lastStartPoint), Math.min(range[1], lastEndPoint)])

        } else {
            stack.push([range[0], range[1]])
        }

    }
    const ans = stack.length;
    return ans;
};