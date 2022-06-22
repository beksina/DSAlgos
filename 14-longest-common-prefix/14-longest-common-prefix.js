/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (prefix[0] !== strs[i][0]) {
            return "";
        }
        if (prefix.length > strs[i].length) {
            prefix = prefix.slice(0, strs[i].length);
        }
        let j = 0;
        while (j < prefix.length) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.slice(0, j);
                break;
            }
            j++;
        }
    }
    return prefix;
};


/*
iterate through string? use first word as a prefix and cut down on it as you move thru?
*/