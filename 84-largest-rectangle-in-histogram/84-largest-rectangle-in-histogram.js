/**
 * @param {number[]} heights
 * @return {number}
 */

const largestRectangleArea = heights => {
    const stack = [-1];
    let maxArea = 0;
    
    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) {
            let currH = heights[stack.pop()];
            let currW = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, currH * currW);
        };
        stack.push(i);
    };
    
    while (stack[stack.length - 1] !== -1) {
        let currH = heights[stack.pop()];
        let currW = heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, currH * currW);
    };
    
    return maxArea;
}
