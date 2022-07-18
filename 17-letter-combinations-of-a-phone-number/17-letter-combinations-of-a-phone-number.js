/**
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits) {
    if (digits.length === 0) return [];
    const letters = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    const res = [];
    function combos(start, curr) {
        if (start >= digits.length) {
            const copyArray = curr.slice();
            res.push(copyArray);
        } else {
            for (let letter of letters[digits[start]]) {
                curr.push(letter);
                combos(start + 1, curr);
                curr.pop();
            }
        }
    }
    combos(0, []);
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].join("");
    }
    return res;
};