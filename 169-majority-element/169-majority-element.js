/**
 * @param {number[]} nums
 * @return {number}
 */


// initial instinct is hashTable w count of nums 
var majorityElement = function(nums) {
    const half = nums.length / 2;
    const count = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in count) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
        // guaranteed one majority element
        if (count[nums[i]] > half) return nums[i];
    }
};