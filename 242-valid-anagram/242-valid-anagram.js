/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    
    const sChars = {};
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in sChars) sChars[s[i]]++
        else sChars[s[i]] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        if (!(t[i] in sChars) || sChars[t[i]] === 0) return false;
        sChars[t[i]]--;
    }
    
    return true;
};