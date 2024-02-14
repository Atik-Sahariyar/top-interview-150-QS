/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const charSet = new Array(128).fill(0);
    let result = [ -Infinity, Infinity]
    let missing = t.length;


    for(let i = 0; i < t.length; i++){
        charSet[t.charCodeAt(i)]++
    }

    let start = 0;

    for(let end = 0; end < s.length; end++){
        if(charSet[s.charCodeAt(end)] > 0){
            missing--
        }


        charSet[s.charCodeAt(end)]--

        while(missing === 0){
            if(result[1] - result[0] > end - start){
                result[1] = end;
                result[0] = start;
            }

            charSet[s.charCodeAt(start)]++
            if(charSet[s.charCodeAt(start)]> 0){
                missing++
            }
            start++
        }

    }

    return result[1] === Infinity ? "": s.slice(result[0], result[1] + 1);
};