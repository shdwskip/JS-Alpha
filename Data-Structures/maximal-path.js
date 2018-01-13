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
const test = [
    '10',
    '(5 <- 11)',
    '(1 <- 8)',
    '(11 <- 3)',
    '(8 <- 7)',
    '(1 <- 5)',
    '(11 <- 2)',
    '(8 <- 6)',
    '(2 <- 15)',
    '(8 <- 4)',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

/* globals Set */
class Graph {
    constructor(vertices) {
        this.matrix = [];
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
    }

    addDirectedEdge(x, y) {
        if (typeof this.matrix[x] === 'undefined') {
            this.matrix[x] = [];
        }

        this.matrix[x].push(y);
    }

    getResult(startVertex) {
        const used = new Set();
        let currentPath = 0;
        let maxPath = Number.MIN_SAFE_INTEGER;
        let nextVertex;
        currentPath = startVertex;

        const dfs = (vertex) => {
            used.add(vertex);
            for (const child of this.matrix[vertex]) {
                if (used.has(child)) {
                    continue;
                }
                currentPath += child;
                if (currentPath > maxPath) {
                    maxPath = currentPath;
                    nextVertex = child;
                }
                dfs(child);
                currentPath -= child;
            }
            return;
        };
        dfs(startVertex);
        used.clear();
        currentPath = nextVertex;
        dfs(nextVertex);
        return maxPath;
    }
}

const vertices = +gets();
const graph = new Graph(vertices);
let lastVertex;
for (let i = 0; i < vertices - 1; i += 1) {
    const line = gets().replace(/[()]/g, '');
    const [parent, child] = line.split(' <- ').map(Number);
    lastVertex = parent;
    graph.addEdge(parent, child);
}
print(graph.getResult(lastVertex));
