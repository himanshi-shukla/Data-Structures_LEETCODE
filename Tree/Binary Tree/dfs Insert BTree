//
class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function inorder(root) {
    if (!root) return [];
    let arr = []
    function traverse(arr, node) {
        if(!node) return;
        traverse(arr,node.left);
        arr.push(node.val);
        traverse(arr, node.right);  
    }
    traverse(arr,root);
    return arr;

}

function insertIntoBtree(root, val) {
    if (root === null) {
        root = new BST(val);
        return root;
    }
    let cur = root;
    if (cur.val < val) {
        if (!cur.left) {
            cur.left = new BST(val);
        }
        return insertIntoBtree(cur.left, val);
    }
    if (cur.val > val) {
        if (!cur.right) {
            cur.right = new BST(val);
        }
        return insertIntoBtree(cur.right, val);
    }
}
/// cannot figure return root;

let data = new BST(1);
data.left = BST(2);
data.right = BST(3);
data.left.left = BST(4);


    // how to print the inserted value;


