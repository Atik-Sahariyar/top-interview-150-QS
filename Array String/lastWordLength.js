/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    const words = s.split(" ");
    const lastWordLength =  words[words.length - 1].length;

    return lastWordLength
};