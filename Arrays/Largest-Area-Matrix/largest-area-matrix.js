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
    '3 3',
    '1 2 2',
    '3 2 2',
    '4 3 2'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
const [rows, cols] = gets().split(' ').map(Number);

const matrix = [];
// const visitedMatrix = [];

for (let i = 0; i < rows; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
    // visitedMatrix[i] = Array.from({
    //     length: matrix[i].length,
    // }).fill(false);
}


const dfs = (source, direction, row, col, number) => {
    if (afterFirst) {
        const nextRow = row + rowDirs[direction];
        const nextCol = col + colDirs[direction];
        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols ||
            source[nextRow][nextCol] !== number ||
            source[nextRow][nextCol] === '@') {
            return;
        }

        row += rowDirs[direction];
        col += colDirs[direction];
        source[row][col] = '@';
        size += 1;
    } else {
        afterFirst = true;
    }
    for (let dir = 0; dir < rowDirs.length; dir += 1) {
        dfs(source, dir, row, col, number);
    }
};

let size = 1;
let maxSize = 1;
let afterFirst = false;
let number;

const rowDirs = [0, +1, 0, -1];
const colDirs = [+1, 0, -1, 0];
for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
        if (matrix[row][col] === '@') {
            continue;
        } else {
            number = matrix[row][col];
            matrix[row][col] = '@';
            dfs(matrix, 0, row, col, number);
            if (size > maxSize) {
                maxSize = size;
            }
            size = 1;
            afterFirst = false;
        }
    }
}
print(maxSize);
