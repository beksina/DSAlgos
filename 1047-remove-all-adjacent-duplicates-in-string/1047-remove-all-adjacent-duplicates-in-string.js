/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (i === 0) continue;
        if (s[i] == s[i-1]) {
            if (i === 1) {
                s = s.slice(i+1);
                i = 0;
            } else {
                s = s.slice(0, i - 1) + s.slice(i+1);
                i -= 2;
            }
        }
    }
    return s;
};