/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    const smaller = nums1.length < nums2.length ? nums1 : nums2;
    const bigger = smaller == nums1 ? nums2 : nums1;
    
    const smTrack = {};
    const bgTrack = {};
    
    for (let i = 0; i < smaller.length; i++) {
        smTrack[smaller[i]] = true;
    }
    
    for (let i = 0; i < bigger.length; i++) {
        bgTrack[bigger[i]] = true;
    }
    
    const res = [];
    for (let bg in bgTrack) {
        if (bg in smTrack) {
            res.push(bg);
        }
    }
    return res;
};