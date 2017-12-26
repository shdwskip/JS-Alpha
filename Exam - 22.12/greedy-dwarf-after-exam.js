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
    '2 3',
    '0 5 2',
    '2 5 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const matrixSize = gets().split(' ').map(Number);
const [rows, cols] = [matrixSize[0], matrixSize[1]];

const matrix = Array.from({
    length: rows,
});
let currentRow;
let currentCol;
let totalCoins = 0;

for (let i = 0; i < rows; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
    for (let j = 0; j < cols; j += 1) {
        if (matrix[i][j] === 0) {
            currentRow = i;
            currentCol = j;
            break;
        }
    }
}

const rowDirs = [0, 0, -1, +1];
const colDirs = [-1, +1, 0, 0];
let dir = 0;
let nextRow = 0;
let nextCol = 0;
let maxValue = 0;
let nextValue;

while (true) {
    const bestNeib = {
        row: 0,
        col: 0,
        value: 0,
    };
    for (dir = 0; dir < 4; dir += 1) {
        nextRow = currentRow + rowDirs[dir];
        nextCol = currentCol + colDirs[dir];
        if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols) {
            nextValue = matrix[nextRow][nextCol];
            if (maxValue < nextValue) {
                maxValue = nextValue;
                bestNeib.row = nextRow;
                bestNeib.col = nextCol;
                bestNeib.value = maxValue;
            }
        }
    }
    if (maxValue === 0 && nextValue === 0) {
        break;
    }
    currentRow = bestNeib.row;
    currentCol = bestNeib.col;
    matrix[currentRow][currentCol] -= 1;
    totalCoins += 1;
    maxValue = 0;
}

print(totalCoins);
