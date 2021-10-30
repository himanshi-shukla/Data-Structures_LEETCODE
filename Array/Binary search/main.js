// Given array [ -1,0,3,5,9,10] key : 9 // Return -1 if no key

function binSearch(arr, key) {
    //creating helper function to recursively check the left and right
    function binSearchHelper(start, end) {
        const midOfArray = Math.floor((start + end) / 2);
        if (key === arr[midOfArray]) {
            return midOfArray;
        }
        else if (key < arr[midOfArray]) {
            return binSearchHelper(start, midOfArray - 1);
        }
        else {
            return binSearchHelper(midOfArray + 1, end);
        }
        // return -1;
    }
    return binSearchHelper(0, arr.length - 1);

}
const arr = [-1, 0, 3, 5, 9, 10];
const key = 9
console.log("Array is", arr);

console.log("Kay element is found", binSearch(arr, key));