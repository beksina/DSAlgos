/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const table = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in table) table[s[i]]++
        else table[s[i]] = 1
    }
    let chars = Object.keys(table);
    chars.sort((a,b) => table[b] - table[a]);
    for (let i = 0; i < chars.length; i++) {
        chars[i] = chars[i].repeat(table[chars[i]]);
    }
    return chars.join("");
};