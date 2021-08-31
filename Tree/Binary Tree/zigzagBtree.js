function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

class stack {
    constructor() {
        this.data = [];
    }
    push(val) {
        this.data.unshift(val);
    }
    pop() {
        return this.data.shift();
    }
    size() {
        return this.data.length;
    }
}


function zigzag(node) {
    if (!node) return;
    let arr = [];
    let stack1 = new stack();
    let stack2 = new stack();
    //enter the first root element in the array from begining in Stack 1
    stack1.push(node);

    // keep looping till either of the stack hold elements
    while (stack1.size() > 0 || stack2.size() > 0) {
        // to create a group structure in output : [[1],[2,3],[4,5,6]]
        let tempArr = [];
        //as long as stack1 has items
        while (stack1.size() > 0) {
            let currentNode = stack1.pop();
            tempArr.push(currentNode.val);
            // follow the pattern of zigzag : this ensures having right child of root in the array first
            if (currentNode.left) {
                stack2.push(currentNode.left);
            }
            if (currentNode.right) {
                stack2.push(currentNode.right);
            }
        }
        // keep adding array as long as arrays have elements to traverse
        if (tempArr.length > 0) {
            arr.push(tempArr);
        }
        //reinitialise temparray to perform level order traversal with [[],[]]
        tempArr = [];
        while (stack2.size() > 0) {
            let currentNode = stack2.pop();
            tempArr.push(currentNode.val);
            if (currentNode.right) {
                stack1.push(currentNode.right);
            }
            if (currentNode.left) {
                stack1.push(currentNode.left);
            }
        }
        if (tempArr.length > 0) {
            arr.push(tempArr);
        }
    }
    return arr;
}

const rootVal = new Node(10);
rootVal.left = new Node(5);
rootVal.right = new Node(15);
rootVal.left.left = new Node(3);
rootVal.left.right = new Node(7);
rootVal.right.left = new Node(8);
rootVal.right.right = new Node(50);

let res = zigzag(rootVal);
console.log('The tree in level order is', res);