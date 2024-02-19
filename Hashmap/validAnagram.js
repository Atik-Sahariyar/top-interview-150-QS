/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

     let i = 0;
     while( i < s.length) {
        const curr = s[i];
        const index = t.indexOf(curr);

        if (index !== -1) {
            t = t.slice(0, index) + t.slice(index + 1);
        }
        i++;
    }

    return t.length === 0;
};

