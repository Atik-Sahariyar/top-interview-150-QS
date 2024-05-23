/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

const rangeBitwiseAnd = (left, right) => {
    var shift = 0;
    for(; left != right; left >>=1, right >>=1, shift++ ){}
    return left << shift;
};