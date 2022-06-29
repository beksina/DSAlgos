/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    let res = 0;
    let i = 0;
    let compare = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let [lastStart, lastEnd] = compare[compare.length - 1];
        let [thisStart, thisEnd] = intervals[i];
        
        let minEnd = Math.min(lastEnd, thisEnd);
        let maxStart = Math.max(lastStart, thisStart);
        
        if (maxStart < minEnd) {
            if (thisEnd >= lastEnd) {
                res++;
            } else {
                compare.pop();
                compare.push(intervals[i]);
                res++;
            }
        } else {
            compare.push(intervals[i]);
        }
    }
    
//     while (i + 1 < intervals.length) {
//         let minEnd = Math.min(intervals[i][1], intervals[i+1][1]);
//         let maxStart = Math.max(intervals[i][0], intervals[i+1][0]);
        
//         if (maxStart < minEnd) {
//             if (intervals[i+1][1] >= intervals[i][1]) {
//                 intervals.splice(i+1, 1);
//             } else {
//                 intervals.splice(i, 1);
//             }
//             res++;
//         } else {
//             i++;
//         }
//     }
    
    return res;
};


/*
    [1,5], [2, 7], [5,1];
*/