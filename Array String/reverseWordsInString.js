/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    const words = s.trim().split(/\s+/);

    const result = words.reverse().join(" ");

    return result
};