/*Approach : Transpose the matrix , then reverse 
T(N)= O(M)
S(N) - O(1)
*/

function rotateMatrix(arr) {
    let row = arr.length, col = arr[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = i; j < col; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col / 2; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[i][col - j - 1];
            arr[i][col - j - 1] = temp;
        }
    }

}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("The original array is", arr);
console.log("The rotated image is", rotateMatrix(arr));
console.log("flipped", arr)