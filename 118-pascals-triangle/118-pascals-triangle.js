/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(n) {
    const res = [];
    for (let i = 1; i <= n; i++) {
        let row = Array(i).fill(1);
        res.push(row);
    }
    if (n < 3) return res;
    
    for (let i = 2; i < res.length; i++) {
        let rowLen = res[i].length;
        for (let j = 1; j < rowLen - 1; j++) {
            res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
    }
    
    return res;
};