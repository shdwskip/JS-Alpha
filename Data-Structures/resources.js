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
    'main.css needs sub1.css',
    'index.html needs main.js',
    'main.css needs sub2.css',
    'main.js needs partial.html',
    'index.html needs logo.png',
    'index.html needs sub2.css',
    'partial.html needs partial.js',
    'main.js needs player.png',
    'index.html needs main.css',
    'sub2.css needs partial.js',
    'index.html needs partial.html'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const allCommands = +gets();

class Graph {
    constructor() {
        this.dependencies = {};
        this.incomeEdges = {};
        this._verticesCount = 0;
    }

    addVertex(vertex, child) {
        if (!this.dependencies.hasOwnProperty(vertex)) {
            this.dependencies[vertex] = [];
            this.dependencies[vertex].push(child);
        } else {
            this.dependencies[vertex].push(child);
        }

        if (!this.incomeEdges.hasOwnProperty(vertex)) {
            this.incomeEdges[vertex] = 0;
            this._verticesCount += 1;
        }

        if (this.incomeEdges.hasOwnProperty(child)) {
            this.incomeEdges[child] += 1;
        } else {
            this.incomeEdges[child] = 1;
            this._verticesCount += 1;
        }
    }

    _bestVertex(used) {
        const candidates = [];
        for (const vertex in this.incomeEdges) {
            if (this.incomeEdges[vertex] === 0 && !used.includes(vertex)) {
                candidates.push(vertex);
            }
        }
        candidates.sort();
        return candidates[0];
    }

    getResources() {
        const used = [];
        while (used.length < this._verticesCount) {
            const currentBest = this._bestVertex(used);
            used.push(currentBest);

            if (this.dependencies.hasOwnProperty(currentBest)) {
                for (const child of this.dependencies[currentBest]) {
                    this.incomeEdges[child] -= 1;
                }
            }
        }
        return used;
    }
}

const dependencies = new Graph();

for (let i = 0; i < allCommands; i += 1) {
    const [x, y] = gets().split(' needs ');
    dependencies.addVertex(x, y);
}
print(dependencies.getResources().join(' '));
