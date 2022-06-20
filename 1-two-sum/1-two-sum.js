/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let vals = {};
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (comp in vals) {
            return [vals[comp], i];
        } else {
            vals[nums[i]] = i;
        }
    }
};