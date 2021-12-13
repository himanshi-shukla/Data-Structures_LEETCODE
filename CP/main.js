const dialPad =
    [[1, 2, 3],
    [4, 'X', 6],
    [7, 8, 9]];
//create a set to map the visited nodes
const set = new Set();
let r = 0;
let c = 2;
set.add(3); // defining the start node
findPathsDFS(r, c, []);// call the function with row , cols and the initial blank array

function findPathsDFS(r, c, path) {
    if (r < 0 || r > dialPad.length - 1 || c < 0 || c > dialPad[0].length - 1 || dialPad[r][c] === 'X') {
        return; //when the currentNode is out of bounds or the element is X
    }
    const currentPos = dialPad[r][c]; // defines the current node being considered
    if (path.indexOf(currentPos) > -1) {
        return; // if the current node is already in the map( considered as a src/desintaion), DISCARD traverse
    }
    const newPath = [...path, currentPos]; //create a newer instance of the dialpad without the marked -1 nodes
    if (newPath.length === 4) {
        if (set.has(currentPos)) {
            return;
        } else {
            set.add(currentPos);
            findPathsDFS(r, c, []);
        }
    }

    //recursively traverse top->right->bottom->left
    findPathsDFS(r - 1, c, newPath);
    findPathsDFS(r, c + 1, newPath);
    findPathsDFS(r + 1, c, newPath);
    findPathsDFS(r, c - 1, newPath);

}
console.log(">>>> 🔥   set", set);
console.log(">>>> 🔥   set", set.size - 1);