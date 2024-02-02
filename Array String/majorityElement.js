/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
     
    let midElement = Math.floor(nums.length / 2);

    if(nums[0] === nums[midElement]){
        return nums[0]
    };

    return nums[midElement];
    
    


};

