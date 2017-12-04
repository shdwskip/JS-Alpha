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
const test = ['6 6',
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


const matrixSize = gets().split(' ').map(Number);
const N = matrixSize[0];
const M = matrixSize[1];
const matrix = [];
let rightResult = 1;
let downResult = 1;
let rightDiagonal = 1;
let leftDiagonal = 1;
let maxResult = 1;

for (let row = 0; row < N; row += 1) {
    matrix[row] = gets().split(' ').map(Number);
}

for (let row = 0; row < N; row += 1) {
    for (let col = 0; col < M; col += 1) {
        // check right
        for (let i = 0; i < M; i += 1) {
            if (col + i + 1 < M) {
                const currentNumber = matrix[row][col + i];
                const nextNumber = matrix[row][col + i + 1];
                if (currentNumber === nextNumber) {
                    rightResult += 1;
                }
            } else if (maxResult < rightResult) {
                maxResult = rightResult;
                rightResult = 1;
            }
        }
        // check down
        for (let j = 0; j < N; j += 1) {
            if (row + j + 1 < N) {
                const currentNumber = matrix[row + j][col];
                const nextNumber = matrix[row + j + 1][col];
                if (currentNumber === nextNumber) {
                    downResult += 1;
                }
            } else if (maxResult < downResult) {
                maxResult = downResult;
                downResult = 1;
            }
        }
        // // check diagonal
        for (let z = 0; z < N; z += 1) {
            if (row + z + 1 < N && col + z + 1 < M) {
                const currentNumber = matrix[row + z][col + z];
                const rightDiagonalNumber = matrix[row + z + 1][col + z + 1];
                if (currentNumber === rightDiagonalNumber) {
                    rightDiagonal += 1;
                }
            } else if (maxResult < rightDiagonal) {
                maxResult = rightDiagonal;
                rightDiagonal = 1;
            }
            if (row + z + 1 < N && col - z - 1 >= 0) {
                const currentNumber = matrix[row + z][col - z];
                const leftDiagonalNumber = matrix[row + z + 1][col - z - 1];
                if (currentNumber === leftDiagonalNumber) {
                    leftDiagonal += 1;
                }
            } else if (maxResult < leftDiagonal) {
                maxResult = leftDiagonal;
                leftDiagonal = 1;
            }
        }
        rightResult = 1;
        downResult = 1;
        rightDiagonal = 1;
        leftDiagonal = 1;
    }
}
print(maxResult);