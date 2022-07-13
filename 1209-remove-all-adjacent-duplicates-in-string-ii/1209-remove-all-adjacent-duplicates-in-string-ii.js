/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
    const count = {};
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] !== s[i-1]) {
            count[i] = 1;
        } else {
            count[i] = count[i-1] + 1;
            if (count[i] === k) {
                s = s.slice(0, i - k + 1) + s.slice(i + 1);
                i = i - k;
            }
        }
    }
    return s;
};