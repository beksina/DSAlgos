/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || s[i] !== "]") {
            stack.push(s[i]);
        } else {
            let sub = "";
            while (stack[stack.length - 1] !== "[") {
                let char = stack.pop();
                sub = char + sub;
            };
            // remove opening bracket
            stack.pop();
            let k = "";
            while (!(isNaN(stack[stack.length-1]))) {
                let n = stack.pop();
                k = n + k;
            }
            stack.push(sub.repeat(Number(k)));
        }
    }
    return stack.join("");
};