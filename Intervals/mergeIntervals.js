/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {

    let n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
  
    for(let i = 1; i < n; i++){
        if(intervals[i][0] <= intervals[i - 1][1]){
            if(intervals[i][1] >= intervals[i - 1][1]){
                intervals.splice(i - 1, 2, [intervals[i - 1][0], intervals[i][1]])
            } else {
                intervals.splice(i, 1);
            }
            i--;
            n--;
  
        }
    }    
    return intervals
  };