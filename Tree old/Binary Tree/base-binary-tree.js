class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
/*                                                 1

                                        2                  3

                                    4        5         6        7

                                 0     0   8    9

*/
                            
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode
            return;
        }
        
        // Level Order 
        const q = [];//create queue
        q.push(this.root); //enqueue

        while (q.length > 0) {
            const curNode = q.shift(); // DQueue
            
            if (!curNode.left) {
                curNode.left = newNode;
                return;
            } else if (!curNode.right) {
                curNode.right = newNode;
                return;
            } else {
                //add newer nodes to the left and right respectively 
                q.push(curNode.left);
                q.push(curNode.right);
            }
        }


    }
}


var bt = new BinaryTree();

function insertLevelOrderFromArray(arr) {
    arr.forEach(el => bt.insertLevelOrder(el))
}


insertLevelOrderFromArray([1,2,3,4,5,6,7,null, null,8,9]);

// bt.insertLevelOrder(1);
// bt.insertLevelOrder(2);
// bt.insertLevelOrder(3);
// bt.insertLevelOrder(4);
// bt.insertLevelOrder(5);
// bt.insertLevelOrder(6);
// bt.insertLevelOrder(7);
// bt.insertLevelOrder(null);
// bt.insertLevelOrder(null);
// bt.insertLevelOrder(8);
// bt.insertLevelOrder(9);