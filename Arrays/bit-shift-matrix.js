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
    '5',
    '6',
    '4',
    '14 27 1 5'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
const multiply = require('../Others/multiply-big-numbers');
const add = require('../Others/sum-big-numbers');

const generateMatrix = (rows, cols) => {
    const result = [];
    const row = Array.from({
        length: cols,
    });
    for (let i = 0; i < rows; i += 1) {
        result.push([...row]);
    }

    result[rows - 1][0] = '1';

    for (let i = rows - 2; i >= 0; i -= 1) {
        result[i][0] = multiply(result[i + 1][0], '2');
    }

    for (let i = 0; i < rows; i += 1) {
        for (let j = 1; j < cols; j += 1) {
            result[i][j] = multiply(result[i][j - 1], '2');
        }
    }

    return result;
};

const rows = +gets();
const cols = +gets();
const moves = +gets();
const codes = gets().split(' ').map(Number);
const matrix = generateMatrix(rows, cols);

const COEFF = Math.max(rows, cols);

let currentRow = rows - 1;
let currentCol = 0;
let result = '1';
matrix[currentRow][currentCol] = '0';

for (let i = 0; i < moves; i += 1) {
    const nextCol = codes[i] % COEFF;
    const nextRow = Math.floor(codes[i] / COEFF);

    while (currentRow !== nextRow || currentCol !== nextCol) {
        if (nextCol > currentCol) {
            currentCol += 1;
            result = add(result, matrix[currentRow][currentCol]);
            matrix[currentRow][currentCol] = '0';
        } else if (nextCol < currentCol) {
            currentCol -= 1;
            result = add(result, matrix[currentRow][currentCol]);
            matrix[currentRow][currentCol] = '0';
        } else if (nextRow > currentRow) {
            currentRow += 1;
            result = add(result, matrix[currentRow][currentCol]);
            matrix[currentRow][currentCol] = '0';
        } else if (nextRow < currentRow) {
            currentRow -= 1;
            result = add(result, matrix[currentRow][currentCol]);
            matrix[currentRow][currentCol] = '0';
        }
    }
}

print(result);
