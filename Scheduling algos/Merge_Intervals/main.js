let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

function merge(intervals) {
    if (intervals.length === 1) return intervals;
    else if (!intervals) return [];

    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    let resultArray = [intervals[0]];
    for (let interval of intervals) {
        let lastInterval = resultArray[resultArray.length - 1];
        if (lastInterval[1] >= interval[0]) {
            lastInterval[1] = Math.max(lastInterval[1], interval[1]);// overlapping
        } else {
            resultArray.push(interval);//non - overlapping
        }
    }
    return resultArray;
}
console.log("The resultant array is", merge(intervals))