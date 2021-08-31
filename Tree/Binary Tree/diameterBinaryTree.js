function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null
}

// Time : O(n) for DFS
// Space : O(h) avg , O(n) worst
function diameterOfBinaryTree(root) {
  if (!root) return 0;

  function helper(node) {
    if (!node) return 0;
    return Math.max(helper(node.left), helper(node.right)) + 1;
  }
  let base = helper(root.left) + helper(root.right);
  let leftHeight = diameterOfBinaryTree(root.left);
  let rightHeight = diameterOfBinaryTree(root.right);

  return Math.max(leftHeight, base, rightHeight);

};

const rootVal = new Node(10);
rootVal.left = new Node(5);
rootVal.right = new Node(15);
rootVal.left.left = new Node(3);
rootVal.left.right = new Node(7);
rootVal.right.left = new Node(8);
rootVal.right.right = new Node(50);

let res = diameterOfBinaryTree(rootVal);
console.log("The boundary of the tree is : ", res);