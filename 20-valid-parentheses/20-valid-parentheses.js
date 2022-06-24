/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracks = {"(": ")", "[": "]", "{": "}"};
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in bracks) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false;
            let openingBrack = stack.pop();
            if (bracks[openingBrack] !== s[i]) return false;
        }
    }
    return stack.length === 0;
};