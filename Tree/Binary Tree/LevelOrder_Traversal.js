class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// level order ------- B F S ----------
function levelOrderTraverse(root) {
    // create a queue and insert the root element to it.
    let queue = [root];
    let outputArr = [];
    while (queue.length > 0) {
        let currentNode = queue.shift();
        outputArr.push(currentNode.val)
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
    return outputArr;
}

// Inorder -------- best ascending order -------

function inorder(root) {
    let arr = [];
    function inorderHelper(currentNode) {
        if (!currentNode) return arr;
        inorderHelper(currentNode.left);
        arr.push(currentNode.val);
        inorderHelper(currentNode.right);
        //console.log('array is', arr);
    }
    inorderHelper(root);
    return arr;
}

// PreOrder ------root left right ---

function preorder(root) {
    let arr = [];
    function preorderHelper(currentNode) {
        if (!currentNode) return arr;
        arr.push(currentNode.val);
        preorderHelper(currentNode.left);
        preorderHelper(currentNode.right);
    }
    preorderHelper(root);
    return arr;
}

//level order with grouping------- B F S ----------
function levelOrderTraversebyGroup(root) {
    // create a queue and insert the root element to it.
    let queue1 = [];
    let queue2 = [];
    queue1.push(root);
    let outputArr = [];
    while (queue1.length > 0 || queue2.length > 0) {
        let tempArr = [];
        while (queue1.length > 0) {
            let currentNode = queue1.shift();
            tempArr.push(currentNode.val)
            if (currentNode.left) queue1.push(currentNode.left);
            if (currentNode.right) queue1.push(currentNode.right);

        }
        if (tempArr.length > 0) outputArr.push(tempArr);
        tempArr = [];
        while (queue2.length > 0) {
            let currentNode = queue.shift();
            tempArr.push(currentNode.val)
            if (currentNode.left) queue2.push(currentNode.left);
            if (currentNode.right) queue2.push(currentNode.right);

        }
        if (tempArr.length > 0) outputArr.push(tempArr);
    }
    return outputArr;
}

const rootVal = new Node(7);
rootVal.left = new Node(1);
rootVal.right = new Node(9);
rootVal.left.left = new Node(0);
rootVal.left.right = new Node(3);

//console.log('the current tree', rootVal);
const res = levelOrderTraverse(rootVal);
console.log('Level order Traversed tree : ', res);
const inorderTraversal = inorder(rootVal);
console.log('Inorder traversed array is', inorderTraversal);

const preOrderTraversal = preorder(rootVal);
console.log('Preorder Traversed array is', preOrderTraversal);

const result = levelOrderTraversebyGroup(rootVal);
console.log('Level order by group Traversed tree :', result);



