/**
 * @param {number[]} nums
 * @return {number}
 */

/*
O(n) time / O(1) space
*/
var maxSubArray = function(nums) {
    // keep track of current and max count
    let curr = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(curr, max);
    }
    return max;
};