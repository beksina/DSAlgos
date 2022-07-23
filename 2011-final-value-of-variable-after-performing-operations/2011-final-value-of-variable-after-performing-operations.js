/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const ops = {"+": 1, "-": -1};
    return operations.reduce((x, curr) => {
        return x + ops[curr[1]];
    }, 0)
};