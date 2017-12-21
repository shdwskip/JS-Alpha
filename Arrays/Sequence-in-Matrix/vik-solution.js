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
    '6 6',
    '92 11 23 42 59 48',
    '11 92 11 72 56 14',
    '17 63 92 11 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const readMatrix = () => {
    const [n, m] = gets().split(' ').map(Number);
    const matrix = Array.from({ length: n });
    for (let i = 0; i < n; i += 1) {
        matrix[i] = gets().split(' ').map(Number);
    }

    return matrix;
};


const moveRight = (i, j, matrix, cols) => {
    for (let col = j; col < cols; col += 1) {
        // matrix[i, col]
    }
};

const moveDown = (i, j, matrix, rows) => {
    for (let row = j; row < rows; row += 1) {
        // matrix[row, j]
    }
};
const moveRightDiagonalUnder = (i, j, matrix) => {
    let [row, col] = [i, j];
    while (row < rows) {
        
        row += 1;
        col += 1;
    }
};

const moveRightDiagonalOver = (i, j, matrix) => {
    let [row, col] = [i, j];
    while (row < rows) {
        
        row -= 1;
        col += 1;
    }
};

const moveLeftDiagonalUnder = (i, j, matrix) => {
    let [row, col] = [i, j];
    while (col < cols) {
        
        row += 1;
        col += 1;
    }
};


const moveLeftDiagonalOver = (i, j, matrix) => {
    let [row, col] = [i, j];
    while (row > - 1) {
        row -= 1;
        col += 1;
    }
};

const matrix = readMatrix();
