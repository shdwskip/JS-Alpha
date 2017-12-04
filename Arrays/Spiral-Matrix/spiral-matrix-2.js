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
const test = ['3'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();

const matrix = [];

for (let i = 0; i < N; i += 1) {
    const row = Array.from({
        length: N,
    });
    matrix.push(row);
}

let direction = 0;
let row = 0;
let col = 0;

const rowDirs = [0, +1, 0, -1];
const colDirs = [+1, 0, -1, 0];

for (let counter = 1; counter <= N * N; counter += 1) {
    matrix[row][col] = counter;
    const nextRow = row + rowDirs[direction];
    const nextCol = col + colDirs[direction];

    if (nextRow >= N || nextRow < 0 ||
        nextCol >= N || nextCol < 0 ||
        typeof matrix[nextRow][nextCol] !== 'undefined') {
            direction += 1;
            direction %= 4;
    }

    row += rowDirs[direction];
    col += colDirs[direction];
}

for (const line of matrix) {
    print(line.join(' '));
}
