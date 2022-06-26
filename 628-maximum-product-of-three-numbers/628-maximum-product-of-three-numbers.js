/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b) => a - b);
    let last = nums.length - 1;
    return Math.max(nums[0] * nums[1] * nums[last], nums[last] * nums[last-1] *                 nums[last-2])
};