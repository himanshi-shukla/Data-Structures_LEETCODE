function spiralOrder(matrix) {
    let row = matrix.length;
    if (!row) return outputArray;
    let col = matrix[0].length;
    let outputArray = [];

    // refactoring required
    let left = 0;
    let right = col - 1;
    let top = 0;
    let bottom = row - 1;
    let direction = 0;
    while (left <= right && top <= bottom) {
        if (direction === 0) {
            for (let i = left; i <= right; i++) {
                outputArray.push(matrix[top][i]);
            }
            direction = 1;
            top++;

        } else if (direction === 1) {
            for (let i = top; i <= bottom; i++) {
                outputArray.push(matrix[i][right])
            }
            direction = 2;
            right--;
        } else if (direction === 2) {
            for (let i = right; i >= left; i--) {
                outputArray.push(matrix[bottom][i]);

            }
            direction = 3;
            bottom--;
        } else if (direction === 3) {
            for (i = bottom; i >= top; i--) {
                outputArray.push(matrix[i][left]);
            }
            direction = 0;
            left++;
        }
    }
    return outputArray;
};
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log("given array is", matrix);
console.log("The spiral matrix is", spiralOrder(matrix));