/**
 * leetcode : 
 * explanation : 
 */
class Solution {
    //Function to insert a node in a BST.
    insert(node, data) {
        //your code here
        function insertHelper(currentNode) {
            if (!currentNode) return;
            if (data > currentNode.data) {
                if (!currentNode.right) {
                    currentNode.right = new Node(data);
                } else {
                    insertHelper(currentNode.right);
                }
            }
            else {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = new Node(data);
                    } else {
                        insertHelper(currentNode.left);
                    }
                }
            }
        }
        insertHelper(node);
    }
}
