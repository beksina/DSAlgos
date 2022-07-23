/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const romans = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    };    
    
    let num = 0;
    let idx = 0;
    
    while (idx < s.length) {
        let r = idx < s.length - 1 ? s[idx] + s[idx + 1] : s[idx];
        if (r in romans) {
            num += romans[r];
            idx += 2;
        } else {
            num += romans[s[idx]];
            idx++;
        }
    }
    
    return num;
};