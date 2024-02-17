/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCounts = {};

    // Count occurrences of each letter in magazine and update the counts
    for (const char of magazine) {
        letterCounts[char] = (letterCounts[char] || 0) + 1;
    }

    // Iterate through ransomNote and check counts in the same loop
    for (const char of ransomNote) {
        if (!letterCounts[char]) {
            return false;
        }
        letterCounts[char]--;
    }

    return true;
};