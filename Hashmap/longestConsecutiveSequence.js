/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
    let set = new Set();
    
    for(const n of nums){
        set.add(n);
    }


    let max = 0;
    for(let n of set){
        if(!set.has(n-1)){
            let count  = 0;
            while(set.has(n++)){
                count++
            }
            max = Math.max(count, max);
        }
    }

    return max
};