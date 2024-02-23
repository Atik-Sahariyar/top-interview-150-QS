/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
    let n = intervals.length

    if (n === 0) return [newInterval]
    if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals]
    if (newInterval[0] > intervals[n-1][1]) return [...intervals, newInterval]

    let result = new Array()
    let i = 0
    for (i ; i < n; i++) {
        let s = newInterval[0]
        if (s > intervals[i][1]) result.push(intervals[i])
        else if ( s >= intervals[i][0] && s <= intervals[i][1]) {
            newInterval[0] = intervals[i][0]
            break
        }
        else if (s < intervals[i][0]) {
            break
        }
    }

    for (i ; i < n; i++) {
        let e = newInterval[1]
        if (e >= intervals[i][0] && e <= intervals[i][1]) {
            newInterval[1] = intervals[i][1]
            result.push(newInterval)
            i++
            break
        }
        else if (e > intervals[i][1] && i == n-1) {
            result.push(newInterval)
        }
        else if (e < intervals[i][0]) {
            result.push(newInterval)
            break
        }
    }

    for (i; i<n ; i++) {
        result.push(intervals[i])
    }
    return result
};