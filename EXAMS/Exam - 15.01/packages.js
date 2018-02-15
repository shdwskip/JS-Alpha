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
    '6',
    '4 8',
    '5 3',
    '2 1',
    '5 1',
    '5 8',
    '3 2',
    '4',
    '5',
    '2',
    '8',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
/* globals Set */

class Graph {
    constructor() {
        this.priorities = {};
        this.inEdges = [];
        this._verticesCount = 0;
    }

    addVertex(vertex, child) {
        if (!this.priorities.hasOwnProperty(vertex)) {
            this.priorities[vertex] = [child];
        } else {
            this.priorities[vertex].push(child);
        }
    }

    getOrder(vertex) {
        const used = new Set();
        const order = [vertex];

        const dfs = (ver) => {
            used.add(ver);
            if (typeof this.priorities[ver] === 'undefined') {
                return;
            }
            for (const child of this.priorities[ver]) {
                if (used.has(child)) {
                    continue;
                }
                order.push(child);
                dfs(child);
            }
        };
        dfs(vertex);
        return order.sort((a, b) => a - b);
    }
}

const packsGraph = new Graph();

const M = +gets();

for (let i = 0; i < M; i += 1) {
    const [parent, child] = gets().split(' ').map(Number);
    packsGraph.addVertex(parent, child);
}

const K = +gets();
for (let i = 0; i < K; i += 1) {
    print(packsGraph.getOrder(+gets()).join(' '));
}