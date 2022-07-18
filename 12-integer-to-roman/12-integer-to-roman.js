/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
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
    const res = [];
    for (let r in romans) {
        if (romans[r] <= num && num > 0) {
            let times = Math.floor(num / romans[r]);
            res.push(r.repeat(times));
            num = num % romans[r];
        }
    };
    return res.join("");
};