function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function nodeSum(root) {
    let sum = 0;
    function nodeSumHelper(currentNode) {
        if (!currentNode) return;
        nodeSumHelper(currentNode.left);
        nodeSumHelper(currentNode.right);
        sum += currentNode.val;
    }
    nodeSumHelper(root);
    return sum;
}

const rootVal = new Node(7);
rootVal.left = new Node(1);
rootVal.right = new Node(9);
rootVal.left.left = new Node(0);
rootVal.left.right = new Node(3);
rootVal.right.left = new Node(8);
rootVal.right.right = new Node(13);
console.log('tree is', rootVal);
const myData = nodeSum(rootVal);
console.log('The tree Sum is :  ', myData);

createGraph({
    title: 'Generated BT from object 😎',
    data: getTreeJson(rootVal)
});