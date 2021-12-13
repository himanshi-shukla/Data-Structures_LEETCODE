const dialPad =

    [[1, 2, 3],
    [4, 'X', 6],
    [7, 8, 9]];

const set = new Set();
let r = 0;
let c = 2;
set.add(3);
findPathsDFS(r, c, []);
function findPathsDFS(r, c, path) {
    if (r < 0 || r > dialPad.length - 1 || c < 0 || c > dialPad[0].length - 1 || dialPad[r][c] === 'X') {
        return;
    }

    const currentPos = dialPad[r][c];
    if (path.indexOf(currentPos) > -1) {
        return;
    }
    const newPath = [...path, currentPos];
    if (newPath.length === 4) {
        if (set.has(currentPos)) {
            return;
        } else {
            set.add(currentPos);
            findPathsDFS(r, c, []);
        }
    }
    findPathsDFS(r - 1, c, newPath);
    findPathsDFS(r, c + 1, newPath);
    findPathsDFS(r + 1, c, newPath);
    findPathsDFS(r, c - 1, newPath);

}
console.log(">>>> 🔥   set", set);
console.log(">>>> 🔥   set", set.size - 1);