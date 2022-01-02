let intervals = [[0, 2], [3, 7], [4, 6], [7, 8], [1, 5]]
let start = [0, 3, 4, 7, 1];
let end = [2, 7, 6, 8, 5];
function maxOccuring(start, end) {
    let maxOverlap = 0;
    let currentoverlap = 0;
    let startIntervals = start.sort((a, b) => a - b);
    let endIntervals = end.sort((a, b) => a - b);
    let i = 0, j = 0
    while (i < startIntervals.length && j < endIntervals.length) {
        if (startIntervals[i] < endIntervals[j]) {
            currentoverlap++;
            maxOverlap = Math.max(currentoverlap, maxOverlap);
            i++;
        } else {
            currentoverlap--;
            j++;
        }
    }
    return maxOverlap;
}
console.log("Sorted Intervals", maxOccuring(start, end));