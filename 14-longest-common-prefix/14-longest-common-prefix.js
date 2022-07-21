/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let pre = "";
    strs.sort();
    
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) return pre;
        pre += strs[0][i];
    }
    
    return pre;
};