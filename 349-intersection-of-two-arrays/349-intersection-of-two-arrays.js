/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    const setOne = new Set(nums1);
    const setTwo = new Set(nums2);
    const res = new Set();
    
    for (let n of setOne) {
        if (setTwo.has(n)) res.add(n);
    }
    
    return Array.from(res);
};