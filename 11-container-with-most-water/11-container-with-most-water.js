/**
 * @param {number[]} height
 * @return {number}
 */

/*
Brute force too slow

 var maxArea = function(height) {
     let max = 0;
     for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let currArea = Math.min(height[i], height[j]) * (j-i);
            max = Math.max(max, currArea);
        }
    }
    return max;
};
*/

function maxArea(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    while (start < end) {
        let left = height[start];
        let right = height[end];
        let currArea = Math.min(left, right) * (end - start);
        max = Math.max(max, currArea);
        if (left < right) {
            start++;
        } else {
            end--;
        }
    }
    return max;
}





