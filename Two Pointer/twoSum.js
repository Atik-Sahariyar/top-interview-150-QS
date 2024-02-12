/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(!numbers.length) return 0;
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        let sum = numbers[left] + numbers[right];

        if(sum === target) break;
        else if(sum > target) right--;
        else left++
    }
    return [left+1, right + 1];
};