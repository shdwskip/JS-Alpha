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
for (let i = 0; i < N; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
}
print('='.repeat(10));


let currentSum = 0;
let maxSum = 0;
/* 5 5
 1  1  3  3  5
-6 -7  2 -3 -1
 3  0 -4  5  9
 7 -7  0  1  0
-7 -6 -4 -4  9 */
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

print('Max:' + maxSum);
