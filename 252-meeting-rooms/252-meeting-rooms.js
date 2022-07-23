/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

function canAttendMeetings(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        let maxStart = Math.max(intervals[i][0], intervals[i-1][0]);
        let minEnd = Math.min(intervals[i][1], intervals[i-1][1]);
        if (maxStart < minEnd) return false;
    }
    return true;
};