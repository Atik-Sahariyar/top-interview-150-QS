/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const n = s.length;
    for(let i = 0; i < n; i++){
        if(s.indexOf(s[i]) !== t.indexOf(t[i])){
            return false;
        }
    }

    return true;
};

const s = "egg", t = "add";
console.log(isIsomorphic(s, t))