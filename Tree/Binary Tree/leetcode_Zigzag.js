/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
class stack {
    constructor() {
        this.data = [];
    }
    push(val) {
        //adding element from the begining
        this.data.unshift(val);
    }
    pop() {
        //removing element from the begining of the array
        return this.data.shift();
    }
    size() {
        // determines the stack size
        return this.data.length;
    }
}
var zigzagLevelOrder = function (root) {
    let outputArr = [];
    if (!root) return;
    let stack1 = new stack();
    let stack2 = new stack();
    //enter the first root element
    stack1.push(root);
    while (stack1.size() > 0 || stack2.size() > 0) {
        let temp = [];
        while (stack1.size > 0) {
            //remove the root element from stack1
            let currentNode = stack1.pop();
            temp.push(currentNode.val);
            if (currentNode.left) stack2.push(currentNode.left);
            if (currentNode.right) stack2.push(currentNode.right);
        }
        if (temp.length > 0) { outputArr.push(temp); }
        temp = [];
        //perform the same on stack2 : ideally level n goes to stack1, level n+1 is stack2
        while (stack2.size > 0) {
            //remove the root element from stack2
            let currentNode = stack2.pop();
            temp.push(currentNode.val);
            if (currentNode.right) stack1.push(currentNode.right);
            if (currentNode.left) stack1.push(currentNode.left);
        }
        if (temp.length > 0) { outputArr.push(temp); }
    }
    return outputArr;
};