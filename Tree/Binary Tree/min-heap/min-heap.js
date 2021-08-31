class Node {
    constructor(val, parent) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.parent = parent;
    }
}


class MinHeap {
    constructor() {
        this.root = null;
    }

    updateParentHeight(currentNode) {
        if (!currentNode) {
            return; // reached till root already
        }

        currentNode.height = Math.max(currentNode.left ? currentNode.left.height : 0, currentNode.right ? currentNode.right.height : 0) + 1;

        this.updateParentHeight(currentNode.parent)
    }

    updateHeightOfAllNodes() {
        if (!this.root) {
            return;
        }

        function updateHeightOfCurrentNode(currentNode) {
            if (!currentNode) {
                return 0;
            }

            currentNode.height = Math.max(updateHeightOfCurrentNode(currentNode.left), updateHeightOfCurrentNode(currentNode.right)) + 1;

            return currentNode.height;
        }

        updateHeightOfCurrentNode(this.root)

    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val)
            return;
        }

        let largestValueToInsert = val; // this should be always greater value

        const insertHelper = (currentNode) => {

            // check which is bigger and swap if req
            if (currentNode.val > largestValueToInsert) {
                const tempSwapVar = largestValueToInsert;
                largestValueToInsert = currentNode.val;
                currentNode.val = tempSwapVar;
            }

            // now decide - left subtree or right subtree

            // will decide on val instead of height

            if (!currentNode.left) {
                const newNode = new Node(largestValueToInsert); // New node created
                newNode.parent = currentNode;
                currentNode.left = newNode;

                // update current height and parent height till root
                // currentNode.height = 1; // Math.max(1, currentNode.right ? currentNode.right.height + 1 : 0)

                this.updateParentHeight(newNode.parent)
            } else if (!currentNode.right) {
                const newNode = new Node(largestValueToInsert)
                newNode.parent = currentNode;
                currentNode.right = newNode;

                // currentNode.height = 1; // Math.max(1, currentNode.right ? currentNode.right.height + 1 : 0)
                this.updateParentHeight(newNode.parent)
            } else {
                // both present, check lesser height
                if (currentNode.right.height < currentNode.left.height) {
                    insertHelper(currentNode.right)
                } else {
                    insertHelper(currentNode.left)
                }
            }
        }

        insertHelper(this.root)
    }

    postOrderTraversal() {
        if (!this.root) {
            return;
        }

        // Not using it for traversing or storing heap, but just as cleaner approach to print/return output
        const outputArr = [];

        function postOrderTraversalHelper(currentNode) {
            if (!currentNode) {
                return currentNode;
            }

            postOrderTraversalHelper(currentNode.left)
            postOrderTraversalHelper(currentNode.right)
            outputArr.push(currentNode.val)
        }

        postOrderTraversalHelper(this.root)

        console.log("postOrderTraversal : ", outputArr)
    }

    printOddNumbersInPreOrderTraversal() {
        if (!this.root) {
            return;
        }

        // Not using it for traversing or storing heap, but just as cleaner approach to print/return output
        const outputArr = [];

        function printOddNumbersInPreOrderTraversalHelper(currentNode) {
            if (!currentNode) {
                return currentNode;
            }

            if (currentNode.val % 2 !== 0) {
                outputArr.push(currentNode.val)
            }

            printOddNumbersInPreOrderTraversalHelper(currentNode.left)
            printOddNumbersInPreOrderTraversalHelper(currentNode.right)
        }

        printOddNumbersInPreOrderTraversalHelper(this.root)

        console.log("printOddNumbersInPreOrderTraversal : ", outputArr)
    }
}


function insertValWrapper(val) {
    minHeap.insert(val)

    createGraph({
        title: `After ${val}`,
        data: getTreeJson(minHeap.root)
    });
}
/**
To add a new value to the heap 
    add it to the top of the heap. 

If the heap is empty 
    the new value becomes the root.

If heap is not empty than
    the smaller of the two values (current value in heap and the new value) is kept in the root.

    The larger of the two values is added to the sub-heap with the smallest height. 
        If both sub-heaps have the same height then
            the larger of the two values is added to the left heap. 
        
    The process is repeated until a value is added to a new node at the bottom of the heap. 

(There are better ways of adding to a min-heap, 
    but this is the way you are to use in this assignment.) 

Figure 2 is the result of adding 50 to the heap in figure 1.

 */


const minHeap = new MinHeap();
// Dummy values
// minHeap.insert(10)
// minHeap.insert(20)
// minHeap.insert(30)
// minHeap.insert(40)
// minHeap.insert(50)
// minHeap.insert(60)
// minHeap.insert(70)

// Actual Values
// minHeap.insert(45)
// minHeap.insert(65)
// minHeap.insert(72)
// minHeap.insert(90)
// minHeap.insert(82)
// minHeap.insert(81)
// minHeap.insert(96)
// minHeap.insert(99)
// minHeap.insert(95)
// minHeap.insert(50) // New Node ideally

// Create Heap manually
minHeap.root = new Node(45);

minHeap.root.left = new Node(65, minHeap.root);
minHeap.root.right = new Node(72, minHeap.root);

minHeap.root.left.left = new Node(90, minHeap.root.left);
minHeap.root.left.right = new Node(81, minHeap.root.left);

minHeap.root.right.left = new Node(82, minHeap.root.right);
minHeap.root.right.right = new Node(96, minHeap.root.right);

minHeap.root.left.left.left = new Node(99, minHeap.root.left.left)
minHeap.root.left.left.right = new Node(95, minHeap.root.left.left)

minHeap.updateHeightOfAllNodes()

createGraph({
    title: 'Generated Min Heap from object 😎',
    data: getTreeJson(minHeap.root)
});


insertValWrapper(50);
insertValWrapper(75);



console.log("minHeap : ", minHeap)

minHeap.postOrderTraversal()
minHeap.printOddNumbersInPreOrderTraversal()