let l1 = [[0, 2], [5, 10]], l2 = [[1, 5], [8, 12]]

/*Time Complexity: O(M + N)O(M+N), where M, NM,N are the lengths of A and B respectively.

Space Complexity: O(M + N)O(M + N), the maximum size of the finalArray. */


function intersection(l1, l2) {
    let i = 0, j = 0; // pointers
    finalArray = []; // displays the final interval intersections
    while (i < l1.length && j < l2.length) {
        let maxStart = Math.max(l1[i][0], l2[j][0]);
        /*
        0,1 = 1
        ---
        2,5 = 2
        finalArray = 1,2
        one more case :
        5,5
        5,8 = 8
        ---
        10,12 = 10
        finalArray = 8,10
         */
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