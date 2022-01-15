let schedule = [[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]

function Interval(start, end) {
    this.start = start;
    this.end = end;
};
function employeeFreeTime(schedules) {

    if (schedules.length <= 1) return [];// check for error condition
    const commonFreeTime = []; // declare final array
    let mergedInterval = schedules.reduce((mergedInterval, schedule) => [...mergedInterval, ...schedule]);
    //merge all the intervals as the individual intervals do not matter
    mergedInterval.sort((a, b) => a.start - b.start); // sort the merged intervals
    let previous = mergedInterval[0], start = previous[0], end = previous[1];
    //intialise the first interval as previos, decide the start and end
    for (let i = 1; i < mergedInterval.length; i++) { // loop through the intervals
        let current = mergedInterval[i];
        if (end >= current.start) { // check the overlap condition here
            start = Math.min(start, current.start);
            end = Math.max(end, current.end);
        } else {
            commonFreeTime.push(new Interval(end, current.start));// add the common time 
            start = current.start;// reset the new start
            end = current.end; // reset the new end time
        }
    }
    return commonFreeTime;
}
// console.log(start);
console.log(" The common free time 👉", employeeFreeTime(schedule))