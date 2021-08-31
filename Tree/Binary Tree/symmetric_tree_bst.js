class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function issymmetricTree(root) {
    if (!root) return true;
    issymmetricTreeHelper(root.left, root.right);

    function issymmetricTreeHelper(curNodeLeft, curNodeRight) {
        if (!curNodeLeft && !curNodeRight) return true;
        if (!curNodeLeft || !curNodeRight) return false;
        if (curNodeLeft.val !== curNodeRight.val) return false;
        return issymmetricTreeHelper(curNodeLeft.left, curNodeRight.right)
            && issymmetricTreeHelper(curNodeLeft.right, curNodeRight.left);
    }
}

/*BST construction

function insertNode(root, val) {
    function insertNodehelper(currentNode) {
        let newVal = new Node(val);
        if (!currentNode) return null;
        if (val < currentNode.left) {
            if (!currentNode.left) {
                currentNode.left = newVal;
            } else {
                insertNodehelper(currentNode.left);
            }
        } else {

            if (!currentNode.right) {
                currentNode.right = newVal;
            } else {
                insertNodehelper(currentNode.right);
            }
        }
    }
    insertNodehelper(root);
}


const rootNode = new Node(100)
insertNode(rootNode, 50)
insertNode(rootNode, 150)
insertNode(rootNode, 25)
insertNode(rootNode, 75)
insertNode(rootNode, 125)
insertNode(rootNode, 175)
insertNode(rootNode, 12)
*/

function inorder(root) {
    let arr = [];
    function inorderHelper(currentNode) {
        if (!currentNode) return;
        inorderHelper(currentNode.left);
        arr.push(currentNode.val);
        inorderHelper(currentNode.right);
    }
    inorderHelper(root);
    return arr;
}
const rootNode = new Node(100);


console.log('root node of BST is', rootNode);

console.log('The traversed array is', inorder(rootNode));