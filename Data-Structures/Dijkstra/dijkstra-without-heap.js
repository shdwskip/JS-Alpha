/* globals Set */

class Graph {
    constructor(edges) {
        this.vertices = [];
    }

    addEdge(x, y, dist) {
        this.addDirectedEdge(x, y, dist);
        this.addDirectedEdge(y, x, dist);
    }

    addDirectedEdge(x, y, dist) {
        if (typeof this.vertices[x] === 'undefined') {
            this.vertices[x] = [];
        }

        this.vertices[x].push({
            to: y,
            distance: dist,
        });
    }

    getShortestPaths(from) {
        let nextVertex;
        const distances = Array.from({
            length: this.vertices.length,
        }).fill(Infinity);
        const visited = new Set();
        distances[from] = 0;

        const dijkstra = (vertex) => {
            let minDist = Number.MAX_SAFE_INTEGER;
            let currDist;

            visited.add(vertex);

            for (const neib of this.vertices[vertex]) {
                if (!visited.has(neib.to) &&
                    (distances[vertex] + neib.distance) < distances[neib.to]) {
                    distances[neib.to] = distances[vertex] + neib.distance;
                }
            }

            for (const v in distances) {
                if (distances[v] === Infinity) {
                    continue;
                }

                if (!visited.has(+v)) {
                    currDist = distances[v];
                }

                if (currDist < minDist) {
                    minDist = currDist;
                    nextVertex = +v;
                }
            }
            if (visited.has(nextVertex)) {
                return;
            }
            dijkstra(nextVertex);
        };
        dijkstra(from);
        return distances;
    }
}

const myGraph = new Graph(7);

myGraph.addEdge(7, 9, 6);
myGraph.addEdge(9, 11, 7);
myGraph.addEdge(9, 5, 20);
myGraph.addEdge(11, 5, 1);
myGraph.addEdge(5, 3, 2);
myGraph.addEdge(5, 4, 10);
myGraph.addEdge(3, 4, 7);

// console.log(myGraph.vertices);

const result = myGraph.getShortestPaths(7);
for (let i = 0; i < result.length; i += 1) {
    if (result[i] === Infinity) {
        continue;
    }

    console.log(`Distance to ${i} is ${result[i]}`);
}
