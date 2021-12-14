function findMinDifference(arr1, arr2) {
    // 0(nlogn + mlogm) Time | 0(1) space
    let p1 = 0;
    let p2 = 0;
    let smallest = Infinity;
    let current = Infinity;
    let result = [];
    // arrays sorted
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    while (p1 < arr1.length && p2 < arr2.length) {
        let num1 = arr1[p1];
        let num2 = arr2[p2];
        if (num1 < num2) {
            current = num2 - num1;
            p1++;
        } else if (num2 < num1) {
            current = num1 - num2;
            p2++;
        }
        else {
            return [num1, num2];
        }
        if (smallest > current) {
            smallest = current;
            result = [num1, num2]
        }
    }
    return result;
}
let arr1 = [-1, 5, 10, 20, 28, 3];
let arr2 = [26, 134, 135, 15, 17];
console.log("the final resultant pair is", findMinDifference(arr1, arr2));