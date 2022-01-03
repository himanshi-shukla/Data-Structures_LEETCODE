let l1 = [[0, 2], [5, 10], [13, 23], [24, 25]], l2 = [[1, 5], [8, 12], [15, 24], [25, 26]]
function intersection(l1, l2) {
    let i = 0, j = 0;
    finalArray = [];
    while (i < l1.length && j < l2.length) {
        let maxStart = Math.max(l1[i][0], l2[j][0]);
        let minEnd = Math.min(l1[i][1], l2[j][1]);
        if (maxStart <= minEnd) {
            finalArray.push([maxStart, minEnd]);
        }
        if (l1[i][1] < l2[j][1]) {
            i++;
        }
        else {
            j++;
        }
    }
    return finalArray;
}
console.log(" The interval intersections are", intersection(l1, l2));