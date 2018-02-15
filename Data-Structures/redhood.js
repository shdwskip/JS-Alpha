/* eslint-disable */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the local test
const test =
    `10
0 3 0 1 0 4 0 4 0 2
6 9
2 9
7 6
8 2
3 8
10 2
5 7
1 8
4 10`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    enqueue(...values) {
        if (values.length > 1) {
            values.forEach(this.enqueue);
            return this;
        }

        const node = {
            value: values[0],
            next: null,
        };

        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        this.count += 1;

        return this;
    }

    dequeue() {
        if (this.head === null) {
            return null;
        }

        const value = this.head.value;

        this.head = this.head.next;

        this.count -= 1;

        if (this.isEmpty()) {
            this.tail = this.tail.next;
        }

        return value;
    }

    peek() {
        if (this.tail === null) {
            return null;
        }

        return this.tail.value;
    }

    isEmpty() {
        return this.count === 0;
    }
}

class Graph {
    constructor(nodes) {
        this.vertices = {};
        this.weights = {};
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(from, to) {
        if (typeof this.vertices[from] === 'undefined') {
            this.vertices[from] = [];
        }

        this.vertices[from].push(to);
    }

    bfs(vertex, graph) {
        const best = {
            vertex,
            path: 0,
        };

        const queue = new Queue();
        const used = new Set();

        queue.enqueue([vertex, this.weights[vertex]]);
        used.add(vertex);

        while (!queue.isEmpty()) {
            const [currentVertex, path] = queue.dequeue();
            if (best.path < path) {
                best.path = path;
                best.vertex = currentVertex;
            }

            this.vertices[currentVertex].forEach((neib) => {
                if (used.has(neib)) {
                    return;
                }
                queue.enqueue([neib, (path + this.weights[neib])]);
                used.add(neib);
            });
        }

        return best;
    }

    getMaxPath(graph) {
        const start = this.vertices[1][0];
        const currentPath = this.bfs(start, this.vertices);
        const best = this.bfs(currentPath.vertex, this.vertices);
        return best.path;
    }
}

const readGraph = () => {
    const destinations = +gets();
    const graph = new Graph(destinations);
    const coins = gets().split(' ').map(Number);
    coins.forEach((coin, index) => {
        graph.weights[index + 1] = coin;
    });
    for (let i = 0; i < destinations - 1; i += 1) {
        const [v1, v2] = gets().split(' ').map(Number);
        graph.addEdge(v1, v2);
    }

    return graph;
};

const graph = readGraph();

console.log(graph.getMaxPath(graph));