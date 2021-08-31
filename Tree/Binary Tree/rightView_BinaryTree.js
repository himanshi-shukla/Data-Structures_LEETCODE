function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// look for the traversal level by level --- icrementing the level at each stage
function rightView(root) {
    let arr = [];
    function rightViewhelper(currentNode, depth) {
        if (!currentNode) return arr;
        if (!arr[depth]) {
            arr[depth] = currentNode.val;
        }
        rightViewhelper(currentNode.right, depth + 1);
        rightViewhelper(currentNode.left, depth + 1);
    }
    rightViewhelper(root, 0);
    return arr;
}

const rootVal = new Node(7);
rootVal.left = new Node(1);
rootVal.right = new Node(9);
rootVal.left.left = new Node(0);
rootVal.left.right = new Node(3);
rootVal.right.left = new Node(8);
rootVal.right.right = new Node(13);
console.log('tree is', rootVal);
const myData = rightView(rootVal);
console.log('The rught view of the tree is :  ', myData);



createGraph({
    title: 'Generated BT from object 😎',
    data: getTreeJson(rootVal)
});