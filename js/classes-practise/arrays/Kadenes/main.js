/* array is [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4] 
flow is : prev = 0;
maxsoFar = 3
val = 3 , max = 3
val =5 , max(3,8) = 8
3,8,8,8,8,8,8,8,8,8,8,


0(n) Time | 0(1) Space
*/


function maxSubArraySum(arr) {
    let previous = 0
    let maxSoFar = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        previous = Math.max(previous + val, val);
        maxSoFar = Math.max(previous, maxSoFar);
    }
    return maxSoFar;
}
let arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(" The maximum subArray sum is : 🔥", maxSubArraySum(arr));
console.log("0(n) Time | 0(1) Space");