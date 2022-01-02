let intervals = [[0, 30], [5, 10], [15, 20]];
function isMeetingPossible(intervals) {
    if (!intervals || intervals.length === 1) return true;
    let newIntervals = intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < newIntervals.length; i++) {
        if (newIntervals[i][1] > newIntervals[i + 1][0]) {
            return false;
        }
    }
    return true;
}

console.log("intervals", intervals);
console.log("The meetings are possible ?", isMeetingPossible(intervals));