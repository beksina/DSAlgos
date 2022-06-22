/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// brute force slow way
var groupAnagrams = function(strs) {
    let res = [];
    let chars = {};
    for (let str of strs) {
        let newStr = str.split('').sort().join('');
        if (newStr in chars) {
            res[chars[newStr]].push(str);
        } else {
            chars[newStr] = res.length;
            res.push([str]);
        }
    }
    return res;
};