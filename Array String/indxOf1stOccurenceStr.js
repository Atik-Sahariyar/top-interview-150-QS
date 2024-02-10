/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) {
     return 0;  
 }
 const n1 = haystack.length, n2  =  needle.length;

 for (let i = 0; i <= n1 - n2; i++) {
     if (haystack.slice(i, i + n2) === needle) {
         return i;
     }
 }

 return -1; 
};