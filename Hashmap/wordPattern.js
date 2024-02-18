/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    const n1 = pattern.length;
    const n2 = words.length;

    if(n1 !== n2) return false;
    const obj = {};
    for(let i =0; i < n2; i++){
        if(obj[pattern[i]] && obj[pattern[i]] !== words[i]){
            return false;
        }
        obj[pattern[i]] = words[i];
    }
    const result = new Set(Object.values(obj)).size === Object.values(obj).length;
    return result;
};