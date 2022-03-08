
/*Time 0(M*N)
space 0(1)
*/

let grid = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
console.log("👉The initial matrix is", grid)

//expected output : [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

function setZeroes(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let mark = 0;
    for (let i = 0; i < row; i++) {
        if (!grid[i][0]) mark = true;
        for (let j = 1; j < col; j++) {
            if (!grid[i][j]) {
                grid[i][0] = 0;
                grid[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (!grid[i][0] || !grid[0][j]) {
                grid[i][j] = 0;
            }
        }
    }
    if (!grid[0][0]) {
        for (let j = 0; j < col; j++)
            grid[0][j] = 0;
    }
    if (mark) {
        for (let i = 0; i < row; i++) {
            grid[i][0] = 0;
        }

    }
}

console.log("🔴The in-place changed matrix is", setZeroes(grid))
