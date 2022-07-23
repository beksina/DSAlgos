/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const nextGreater = {};
    
    for (let i = nums2.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            nextGreater[nums2[i]] = -1;
        } else {
            while (stack.length && nums2[i] > stack[stack.length - 1]) {
                stack.pop();
            }
            if (stack.length === 0) {
                nextGreater[nums2[i]] = -1;
            } else {
                nextGreater[nums2[i]] = stack[stack.length - 1];
            }
        }
        stack.push(nums2[i]);
    }
    
    const res = [];
    
    for (let i = 0; i < nums1.length; i++) {
        res.push(nextGreater[nums1[i]]);
    }
    
    return res;
};