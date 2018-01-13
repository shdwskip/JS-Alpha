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
    '11',
    '2 7 2',
    '1 7 6',
    '5 1 8',
    '2 8 6',
    '8 6 9',
    '10 5 5',
    '9 1 9',
    '0 10 15',
    '3 1 21',
    '6 4 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

/* globals Set */

// https://github.com/Minkov/dmoj-tasks/blob/master/problems/easy/13graphs/03diameter/README.md

class Graph {
    constructor(vertices) {
        this.matrix = [];
        for (let i = 0; i < vertices; i += 1) {
            this.matrix[i] = [];
        }
    }

    addEdge(x, y, weight) {
        this.matrix[x].push({
            toNode: y,
            distance: weight,
        });
        this.matrix[y].push({
            toNode: x,
            distance: weight,
        });
    }

    getResult() {
        const used = new Set();
        let currDistance = 0;
        let maxDistance = Number.MIN_SAFE_INTEGER;
        let nextVertex;

        const dfs = (vertex) => {
            used.add(vertex);
            this.matrix[vertex].forEach((child) => {
                if (used.has(child.toNode)) {
                    return;
                }
                currDistance += child.distance;
                if (currDistance > maxDistance) {
                    maxDistance = currDistance;
                    nextVertex = child.toNode;
                }
                dfs(child.toNode);
                currDistance -= child.distance;
            });
        };
        dfs(0);
        currDistance = 0;
        used.clear();
        dfs(nextVertex);
        return maxDistance;
    }
}
const size = +gets();
const graph = new Graph(size);

for (let i = 0; i < size - 1; i += 1) {
    const [x, y, weight] = gets().split(' ').map(Number);
    graph.addEdge(x, y, weight);
}
print(graph.getResult());
