const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const gets = this.gets || getGets(['6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
]);
let print = this.print || console.log;

const matrixSize = gets().split(' ').map(Number);
const N = matrixSize[0];
const M = matrixSize[1];
const matrix = [];
let rightResult = 1;
let downResult = 1;
let diagonalResult = 1;
let maxResult = 1;

for (let row = 0; row < N; row += 1) {
    matrix[row] = gets().split(' ').map(Number);
}

for (let row = 0; row < N; row += 1) {
    for (let col = 0; col < M; col += 1) {
        // check right
        for (let i = 0; i < M; i += 1) {
            if (typeof matrix[row][col + i + 1] !== 'undefined') {
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
            if (typeof matrix[row + j + 1] !== 'undefined') {
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
        // check diagonal
        for (let z = 0; z < N; z += 1) {
            if (typeof matrix[row + z + 1] !== 'undefined' &&
                typeof matrix[row + z + 1][col + z + 1] !== 'undefined') {
                const currentNumber = matrix[row + z][col + z];
                const nextNumber = matrix[row + z + 1][col + z + 1];
                if (currentNumber === nextNumber) {
                    diagonalResult += 1;
                }
            } else if (maxResult < diagonalResult) {
                maxResult = diagonalResult;
                diagonalResult = 1;
            }
        }
        rightResult = 1;
        downResult = 1;
        diagonalResult = 1;
    }
}
print(maxResult);
