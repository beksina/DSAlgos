/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
    const nums = {};
    
    for (let n of arr) {
        if (n in nums) {
            nums[n]++;
        } else {
            nums[n] = 1;
        }
    }
    
    const occ = {};
    
    for (let n in nums) {
        if (nums[n] in occ) return false;
        occ[nums[n]] = true;
    }
    
    return true;
};