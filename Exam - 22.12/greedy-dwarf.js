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
    '2 5 3'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const size = gets().split(' ').map(Number);
const [rows, cols] = [size[0], size[1]];


const matrix = Array.from({
    length: rows,
});

const rowDirs = [0, 0, -1, +1];
const colDirs = [-1, +1, 0, 0];
let coinsCollected = 0;
let currentRow;
let currentCol;
// generate matrix
for (let i = 0; i < rows; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
    for (let j = 0; j < matrix[i].length; j += 1) {
        if (matrix[i][j] === 0) {
            currentRow = i;
            currentCol = j;
        }
    }
}
let escaped = false;
const currentMatrix = [];
for (let i = 0; i < rows; i += 1) {
    currentMatrix[i] = Array.from(matrix[i]);
}
while (true) {
    let dir = 0;
    let maxValue = Number.MIN_SAFE_INTEGER;
    const bestNeib = {
        value: 0,
        row: 0,
        col: 0,
    };
    for (let i = 0; i < 4; i += 1) {
        const nextRow = currentRow + rowDirs[dir];
        const nextCol = currentCol + colDirs[dir];
        if (nextRow >= 0 && nextRow < rows) {
            const currentValue = currentMatrix[nextRow][nextCol];

            if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols ||
                currentMatrix[nextRow][nextCol] === 0 || maxValue <= currentValue) {
                dir += 1;
                dir %= 4;
                if (maxValue < currentValue) {
                    maxValue = currentValue;
                    bestNeib.value = maxValue;
                    bestNeib.row = nextRow;
                    bestNeib.col = nextCol;
                }
                if (maxValue === 0 && currentValue === 0 && dir % 4 === 0) {
                    escaped = true;
                    break;
                }
            }
        } else {
            dir += 1;
            dir %= 4;
            if (maxValue === 0 && dir % 4 === 0) {
                escaped = true;
                break;
            }
        }
    }
    if (!escaped) {
        currentRow = bestNeib.row;
        currentCol = bestNeib.col;
        coinsCollected += 1;
        currentMatrix[currentRow][currentCol] -= 1;
    } else {
        break;
    }
}

print(coinsCollected);
