class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        // this.parent = null;
    }
}


// function Node(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
// }


function insertNode(root, val) {
    const newNode = new Node(val);
    function insertNodeHelper(node) {
        if (val < node.val) {
            // left side
            if (!node.left) {
                node.left = newNode;
                // newNode.parent = node;
            } else {
                insertNodeHelper(node.left)
            }
        } else {
            // right side
            if (!node.right) {
                node.right = newNode;
                // newNode.parent = node;
            } else {
                insertNodeHelper(node.right)
            }
        }
    }
    insertNodeHelper(root)
}


// function insertNode(currentNode, val) {
//     if (val < currentNode.val) {
//         // left side
//         if (!currentNode.left) {
//             currentNode.left = new Node(val)
//         } else {
//             insertNode(currentNode.left, val)
//         }
//     } else {
//         // right side
//         if (!currentNode.right) {
//             currentNode.right = new Node(val)
//         } else {
//             insertNode(currentNode.right, val)
//         }
//     }
// }


function searchNode(root, val) {

    function searchNodeHelper(currentNode) {
        if (!currentNode) return null;

        if (val === currentNode.val) return currentNode;

        if (val < currentNode.val) {
            return searchNodeHelper(currentNode.left)
        } else {
            return searchNodeHelper(currentNode.right)
        }
    }

    return searchNodeHelper(root)
}


function inOrderTraverse(root) {

    const arr = [];
    let sum = 0;

    //function is agnostic : does not matter what is passed as aparamter in the function. 
    //works only on Recursion. currentnode. any node. root.left.right

    function inOrderTraverseHelper(currentNode) {
        if (!currentNode) return;

        // currentNode -> root is involved here


        inOrderTraverseHelper(currentNode.left);

        inOrderTraverseHelper(currentNode.right);


        // ------- From Here Start -----
        /**
         * What to do when you visit the node
         */
        // console.log("currentNode : ", currentNode.val);

        sum = sum + currentNode.val;
        // currentNode.val = currentNode.val * 2;
        arr.push(currentNode.val)

        // ------- To Here End -----

    }


    inOrderTraverseHelper(root);

    console.log("sum : ", sum)
    return arr;

}


const rootNode = new Node(100)
insertNode(rootNode, 50)
insertNode(rootNode, 150)
insertNode(rootNode, 25)
insertNode(rootNode, 75)
insertNode(rootNode, 125)
insertNode(rootNode, 175)
insertNode(rootNode, 12)



console.log("rootNode : ", rootNode);


console.log("searching : ", searchNode(rootNode, 50))

console.log("inOrderTraverse(rootNode) : ", inOrderTraverse(rootNode))
console.log("rootNode : ", rootNode);



pre - > root left right
currentNode currentNode.left currentNode.right
inorder - left root right