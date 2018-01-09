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
    '8 3',
    '0 7',
    '0 4',
    '7 4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
/* globals Set */
const [N, M] = gets().split(' ').map(Number);

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

        if (!this.inEdges[vertex]) {
            this.inEdges[vertex] = 0;
            this._verticesCount += 1;
        }

        if (this.inEdges[child]) {
            this.inEdges[child] += 1;
        } else {
            this.inEdges[child] = 1;
            this._verticesCount += 1;
        }
    }

    _bestVertex(used) {
        const candidates = [];
        for (const vertex in this.inEdges) {
            if (this.inEdges[vertex] === 0 && !used.has(+vertex)) {
                candidates.push(+vertex);
            }
        }
        // candidates.sort();
        return candidates[0];
    }

    getOrder() {
        this._addZeroEdgesToNonUsedVertices();
        const used = new Set();
        const order = [];
        while (used.size < N) {
            const currentBest = this._bestVertex(used);
            used.add(currentBest);
            order.push(currentBest);
            if (this.priorities.hasOwnProperty(currentBest)) {
                for (const child of this.priorities[currentBest]) {
                    this.inEdges[child] -= 1;
                }
            }
        }
        return order;
    }

    _addZeroEdgesToNonUsedVertices() {
        for (let i = 0; i < this.inEdges.length; i += 1) {
            if (typeof this.inEdges[i] === 'undefined') {
                this.inEdges[i] = 0;
            }
        }
    }
}

const cookingOrder = new Graph();
for (let i = 0; i < M; i += 1) {
    const [a, b] = gets().split(' ').map(Number);
    cookingOrder.addVertex(a, b);
}
for (const ver of cookingOrder.getOrder()) {
    print(ver);
}
// print(cookingOrder.getOrder().join('\n'));