/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const merged = [intervals[0]];
    let current = merged[0];
    for (let next of intervals) {
        let [currStart, currEnd] = current;
        let [nextStart, nextEnd] = next;
        if (currEnd >= nextStart) {
            current[1] = Math.max(currEnd, nextEnd);
        } else {
            merged.push(next);
            current = next;
        }
    }
    return merged;
};