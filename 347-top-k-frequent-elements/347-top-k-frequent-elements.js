/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    const res = [];
    const n = {};
    
    for (let num of nums) {
        if (num in n) n[num]++
        else n[num] = 1
    }
    
    // counts indices will rep count of that num
    const counts = [];
    for (let i = 0; i <= nums.length; i++) {
        let r = [];
        counts.push(r);
    }
    for (let num in n) {
        counts[n[num]].push(num);
    }

    let index = counts.length - 1;
    while (k > 0) {
        if (counts[index].length) {
            for (let i = 0; i < counts[index].length; i++) {
                if (k === 0) break;
                res.push(counts[index][i]);
                k--;
            }
        }
        index--;
    }
    return res;
};