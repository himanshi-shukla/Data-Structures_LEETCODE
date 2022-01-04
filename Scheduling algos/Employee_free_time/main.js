let schedules = [[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]
function Interval(start, end) {
    this.start = start;
    this.end = end;
};

// var employeeFreeTime = function (schedule) {
//     let ans = []

//     let sorted = schedule.reduce((a, b) => [...a, ...b]).sort((a, b) => a.start - b.start)

//     if (schedule.length <= 1) return []

//     let lastEnd = sorted[0].end
//     let lastStart = sorted[0].start

//     for (let i = 1; i < sorted.length; i++) {

//         let current = sorted[i]

//         if (current.start > lastEnd) {
//             ans.push(new Interval(lastEnd, current.start))
//         }
//         lastEnd = Math.max(current.end, lastEnd)
//         lastStart = current.start

//     }

//     return ans
// };
function findFreeTime(schedules) {
    if (!schedules || schedules.length === 1) return [];
    let freeTime = [];
    const mergeIntervals = schedules.reduce((mergeIntervals, schedule) => [...mergeIntervals, ...schedule]);
    mergeIntervals.sort((a, b) => a.start - b.start);
    let prev = mergeIntervals[0], start = prev.start, end = prev.end
    for (let i = 1; i < mergeIntervals.length; i++) {
        let current = mergeIntervals[i];
        if (end >= current.start) {
            start = Math.min(start, current.start);
            end = Math.max(end, current.end);
        } else {
            freeTime.push(new Interval(end, current.start));
            start = current.start;
            end = current.end;
        }
    }

    return freeTime;

}

console.log(" The common free time 👉", findFreeTime(schedules))