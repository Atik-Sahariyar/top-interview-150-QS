/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne =  (digits) => {
    var i = digits.length - 1
    while (digits[i] === 9) {
        digits[i] = 0;
        i--;
    }
    if (i < 0) {
        var arr = [1]
        digits = arr.concat(digits)
    } else {
        digits[i]++;
    }
    return digits;
};