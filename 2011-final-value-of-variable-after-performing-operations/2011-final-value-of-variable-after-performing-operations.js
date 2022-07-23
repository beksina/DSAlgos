/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    // const ops = {"+": 1, "-": -1};
    // return operations.reduce((x, curr) => {
    //     return x + ops[curr[1]];
    // }, 0)
    
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i][1] === "+") x++
        else x--;
    }
    return x;
};