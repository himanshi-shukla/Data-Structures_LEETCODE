class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }

    addChild(val) {
        this.children.push(new Node(val));
        return this;
    }

    addChildren(childrenArr) {
        childrenArr.forEach(child => {
            this.children.push(new Node(child));
        });
        return this;
    }

    BFS() {
        let arr = [];
        let currentNode = this;
        if (!currentNode) return arr;
        const queue = [currentNode];
        while (queue.length > 0) {
            currentNode = queue.shift();
            arr.push(currentNode.val);
            for (let child of currentNode.children) {
                queue.push(child);
            }
        }
        return arr;
    }


}


const root = new Node(1);
root.addChildren([3, 2, 4])

root.children[0].addChildren([5, 6])

console.log("root : ", root)

console.log(root.BFS())