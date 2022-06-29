/**
 * @param {number[][]} intervals
 * @return {number}
 */


// O(nlogn) time / O(1) space
var removeCoveredIntervals = function(intervals) {
    let count = 0;
    intervals.sort((a,b) => a[0] - b[0]);
    
    let prev = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= prev[0] && intervals[i][1] <= prev[1]) {
            count++;
        } else if (intervals[i][0] <= prev[0] && intervals[i][1] >= prev[1]) {
            prev = intervals[i];
            count++;
        } else {
            prev = intervals[i];
        }
    }
    
    return intervals.length - count;
};