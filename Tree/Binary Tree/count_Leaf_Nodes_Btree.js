class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function leafNodeCount(currentNode) {
    if (!currentNode) return 0;
    if (!currentNode.left && !currentNode.right) {
        return 1;
    } else {
        return leafNodeCount(currentNode.left) + leafNodeCount(currentNode.right);
    }
}

const rootVal = new Node(7);
rootVal.left = new Node(1);
rootVal.right = new Node(9);
// rootVal.left.left = new Node(0);
// rootVal.left.right = new Node(3);
// rootVal.right.left = new Node(8);
// rootVal.right.right = new Node(13);
console.log('Binary tree is', rootVal);
const myData = leafNodeCount(rootVal);
console.log('The number of  leaf nodes in tree is :  ', myData);
