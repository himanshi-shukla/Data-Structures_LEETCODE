function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/// using  2 queues to maintain the output in level oder

class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(val) {
        //enter the data from the end
        this.data.push(val);

    }

    dequeue() {
        //come out of the queue from front
        return this.data.shift();
    }
    size() {
        return this.data.length;
    }
}


//Grouping elements in level order  ------ B F S -------
function levelOrderTraversebyGroup(root) {
    let arr = [];
    if (!root) return arr;
    let q1 = new queue();
    let q2 = new queue();
    q1.enqueue(root);
    while (q1.size() > 0 || q2.size() > 0) {
        // create an array which everytime stores the sorted list at a level
        let temp = new queue();
        // as long as there are elements in the q1
        while (q1.size() > 0) {
            //take out the first element from q1 : 7 in this case leaving behind 1 and 9
            let currentNode = q1.dequeue();
            // adding value 7
            temp.enqueue(currentNode.val);
            if (currentNode.right) q2.enqueue(currentNode.right);
            if (currentNode.left) q2.enqueue(currentNode.left);
        }
        if (temp.length > 0) { arr.enqueue(temp); }
        temp = new queue();
        while (q2.size() > 0) {
            let currentNode = q2.dequeue();
            temp.enqueue(currentNode.val);
            if (currentNode.right) q1.enqueue(currentNode.right);
            if (currentNode.left) q1.enqueue(currentNode.left);
        }
        if (temp.length > 0) { arr.enqueue(temp); }
    }
    return arr;
}


const rootVal = new Node(7);
rootVal.left = new Node(1);
rootVal.right = new Node(9);
rootVal.left.left = new Node(0);
rootVal.left.right = new Node(3);
rootVal.right.left = new Node(8);
rootVal.right.right = new Node(13);
const result = levelOrderTraversebyGroup(rootVal);
console.log('Level order grouped Traversed tree :', result);

