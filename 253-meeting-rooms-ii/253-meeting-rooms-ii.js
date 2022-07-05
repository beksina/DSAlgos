/**
 * @param {number[][]} intervals
 * @return {number}
 */

function minMeetingRooms(intervals) {
    intervals.sort((a,b) => a[1] - b[1]); // find last value
    let slots = Array(intervals[intervals.length-1][1] + 1).fill(0);
    for (let int of intervals) {
        for (let i = int[0]; i < int[1]; i++) {
            slots[i]++;
        }
    }
    let minRooms = 1;
    for (let i = 0; i < slots.length; i++) {
        if (slots[i] > minRooms) minRooms = slots[i];
    }
    return minRooms;
}

/*
function minMeetingRooms(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let rooms = 1;
    let left = 0;
    let right = 1;
    let curr = 1;
    while (right < intervals.length && left < right) {
        while (right < intervals.length && isOverlap(intervals[left], intervals[right])) {
            curr++;
            right++;
        }
        rooms = Math.max(rooms, curr);
        curr = 1;
        left++;
        right = left + 1;
    }
    return rooms;
};
    
function isOverlap(int1, int2) {
    let maxStart = Math.max(int1[0], int2[0]);
    let minEnd = Math.min(int1[1], int2[1]);
    if (maxStart < minEnd) {
        return true;
    }
    return false;
}
*/


/*
basically if there r no overlapping ones: => 1 room needed
need to check how many overlaps

[[0,30],[5,10],[15,20], [8,12]] only 2 overlap here AT THE SAME TIME

[[0,12], [5,10], [15,20]]
*/