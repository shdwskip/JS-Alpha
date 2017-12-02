/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const matrixSize = gets().split(' ').map(Number);
const N = matrixSize[0];
const M = matrixSize[1];

const areaRow = 3;
const areaCol = 3;
const maxAllowedRow = N - areaRow + 1;
const maxAllowedCol = M - areaCol + 1;
const matrix = [];

let currentSum = 0;
let maxSum = 0;

for (let row = 0; row < N; row += 1) {
    matrix[row] = gets().split(' ').map(Number);
    for (let col = 0; col < M; col += 1) {
        if (row < areaRow && col < areaCol) {
            maxSum += matrix[row][col];
        }
    }
}

for (let row = 0; row < maxAllowedRow; row += 1) {
    for (let col = 0; col < maxAllowedCol; col += 1) {
        for (let i = 0; i < areaRow; i += 1) {
            for (let j = 0; j < areaCol; j += 1) {
                currentSum += matrix[row + i][col + j];
            }
        }

        if (maxSum < currentSum) {
            maxSum = currentSum;
        }
        currentSum = 0;
    }
}

print(maxSum);
