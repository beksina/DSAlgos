/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(1) extra space
var productExceptSelf = function(nums) {
    let res = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i-1] * nums[i-1];
    }
    // need var to track right side
    let right = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right *= nums[i+1];
        res[i] *= right;
    }
    return res;
};

/*
O(n) space

function productExceptSelf(nums) {
    let res = [];
    let prefix = Array(nums.length).fill(1);
    let postfix = Array(nums.length).fill(1);
    for (let i = 1; i < prefix.length; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    for (let i = postfix.length - 2; i >= 0; i--) {
        postfix[i] = postfix[i+1] * nums[i+1];
    }
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix[i] * postfix[i];
    }
    return res;
}

*/