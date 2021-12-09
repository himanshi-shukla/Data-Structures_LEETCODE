class Graph {
    // have an array to store the Vertices
    // have an adjacency list which maps the edges of the vertex
    constructor(vertexCount) {
        this.vertexCount = vertexCount;
        this.adjList = new Map();
    }


    /* Flow of the graph --->
    Implement a function which lets add more vertex
    Implement a function which lets add edges .// It adds an edge between the src and dest. 
    adjacency list with an empty array initially which adds the corresponding valuse of the vertex
    Log the final Graph with traversal as this is a uni directed graph */

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(start, end) {
        this.adjList.get(start).push(end);
        //this.adjList.get(end).push(start);
    }

    logGraph() {
        let getKey = this.adjList.keys();
        for (let i of getKey) {
            let getVal = this.adjList.get(i);
            var noIdea = "";
            for (let j of getVal) {
                noIdea += j + "";
                console.log(i + " -> " + noIdea);
            }
        }
    }
}

let g = new Graph(5);
//let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
let vertices = [1, 2, 3, 4, 5]

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');
// g.logGraph();

g.addEdge(1, 3);
g.logGraph();

