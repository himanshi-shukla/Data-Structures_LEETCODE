
let intervals = [[1, 3], [6, 9]]
let newInterval = [2, 5]
//expected output : [[1,5],[6,9]]
function insertInterval(intervals, newInterval) {
    //output array for displaying result
    const outputIntervals = [];
    //declare the start and end as 0th and 1st index of the intervals , includes every pair
    for (const [start, end] of intervals) {
        //if no newInterval given or currentInterval's end is smaller than start element of newinterval, push currentInterval
        //basically all small intervals get pushed, until merged

        if (!newInterval || end < newInterval[0]) {
            outputIntervals.push([start, end])
        } //if end element of newInterval is smaller than start of current eg [2,5] and [6,9]--> push [2,5]
        else if (newInterval[1] < start) {
            outputIntervals.push(newInterval)
            newInterval = null; // reset the new Interval
            outputIntervals.push([start, end]) // push the currentInterval
        } else { // find min of current and new for the 0th bound
            newInterval[0] = Math.min(newInterval[0], start);
            //find max of current and new for the 1st bound
            newInterval[1] = Math.max(newInterval[1], end);
        }
    }
    // If newInterval has not been added it means it must be the last one
    if (newInterval) {
        outputIntervals.push(newInterval)
    }
    return outputIntervals;
}

console.log(" 👉Current interval", intervals);
console.log("🟢New interval", newInterval);

console.log("🎯Final interval", insertInterval(intervals, newInterval));