let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

function mergeOverlappingIntervals(intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    const outputIntervals = [];
    let currentInterval = sorted[0]; // taken the first tuple of the array
    outputIntervals.push(currentInterval); // pushed the first tuple in the output array
    /////// O(nLogN) time
    // 0(n) space .... Mutable array
    for (let nextInterval of sorted) {
        const [_, currentIntervalEnd] = currentInterval; /// define currentInterval with start and end
        const [nextIntervalStart, nextIntervalEnd] = nextInterval; // the second array tuple will be combination of nextInterval start and end

        if (currentIntervalEnd >= nextIntervalStart) // overlap condition
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd); // second output array merged
        else {
            currentInterval = nextInterval; // traverse to the second element
            outputIntervals.push(currentInterval);
        }
    }
    return outputIntervals;
}

console.log("The resultant array is", mergeOverlappingIntervals(intervals))