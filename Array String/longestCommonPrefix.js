/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ""; 
    }

    const reference = strs[0];

    for (let i = 0; i < reference.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || reference[i] !== strs[j][i]) {
  
                return reference.slice(0, i);
            }
        }
    }

    return reference;
};