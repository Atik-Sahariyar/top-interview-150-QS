/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = (nums) => {
    let i = 0;
    let j = 0;
  
    for (; i < nums.length; i++) {
        j = 0;
  
        do {
            if (nums[i] === nums[j] && i !== j)
                break;
  
            j++;
        }
        while (j < nums.length)
  
        if (j === nums.length)
            return nums[i];
    }
  };