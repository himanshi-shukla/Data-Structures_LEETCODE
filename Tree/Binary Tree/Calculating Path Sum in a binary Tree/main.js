function checkSum(root, targetSum) {
    if (!root) return false;
    if (root.val === targetSum && !root.left && !root.right) return true;

    return checkSum(root.left, targetSum - root.val) || checkSum(root.right, targetSum - root.val);
}

let root = [5, 4, 8]
let targetSum = 9

console.log("The input tree is", root)
console.log(" Is the target Sum found on the path ???", checkSum(root, targetSum));