/**
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function(n) {
    let fullRows = 0;
    // initial size
    let size = 1;
    while (n >= size) {
        fullRows++;
        n -= size;
        size++;
    }
    return fullRows;
};