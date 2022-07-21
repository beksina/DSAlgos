/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    let l = 0;    
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) break;
        l++;
    }
    
    l--;
    let r = l + 1;
    while (l >= 0 || r < nums.length) {
        let right = r < nums.length ? nums[r] : Infinity;
        let left = l >= 0 ? nums[l] : Infinity;
        
        if (Math.abs(left) < Math.abs(right)) {
            res.push(left * left);
            l--;
        } else {
            res.push(right * right);
            r++;
        }
    }
    
    return res;
};