/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) {
        return [];
    };
    if (k === 1) return nums;
    const left = Array(nums.length).fill(0);
    const right = Array(nums.length).fill(0);
    left[0] = nums[0];
    right[right.length - 1] = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
        // left side
        if (i % k === 0) {
            left[i] = nums[i];
        } else {
            left[i] = Math.max(left[i-1], nums[i]);
        }
        // right side
        let j = nums.length - i - 1;
        if ((j + 1) % k === 0) {
            right[j] = nums[j];
        } else {
            right[j] = Math.max(right[j+1], nums[j]);
        }
    }
    let res = [];
    for (let i = 0; i <= nums.length - k; i++) {
        res.push(Math.max(right[i], left[i + k - 1]));
    }
    return res;
};