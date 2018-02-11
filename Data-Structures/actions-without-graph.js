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

const [n, m] = gets().split(' ').map(Number);
const actions = [];
const final = [];
for (let i = 0; i < n; i += 1) {
    actions[i] = [];
}
let edges = Array(n).fill(0);
const ready = [];
for (let i = 0; i < m; i += 1) {
    let [index, value] = gets().split(' ').map(Number);
    actions[index].push(value);
    edges[value] += 1;
}

for (const value in edges) {
    if (edges[value] === 0) {
        ready.push(value);
    }
}

while (ready.length > 0) {
    ready.sort((a, b) => b - a);

    const current = ready.pop();
    final.push(current);

    actions[current].forEach((x) => {
        edges[x] -= 1;
        if (edges[x] === 0) {
            ready.push(x);
        }
    });
}
print(final.join('\n'));
