const matrix = [
    ['X', 'X', 'X', ' ', 'X', 'X', ' ', 'X', 'X', 'X', 'X'],
    ['X', 'X', ' ', 'X', 'X', 'X', ' ', ' ', ' ', ' ', 'X'],
    ['X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', 'X', ' ', 'X'],
    ['X', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', 'X'],
    ['X', ' ', 'X', ' ', ' ', 'S', 'X', ' ', 'X', 'X', 'X'],
    [' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' ', 'X', 'X'],
    ['X', 'X', 'X', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' '],
    ['X', ' ', ' ', 'X', ' ', ' ', 'X', 'X', ' ', 'X', ' '],
    ['X', 'X', 'X', 'X', 'X', ' ', 'X', ' ', 'X', ' ', 'X'],
];

const startRow = (matrix.length - 1) / 2;
const startCol = (matrix[0].length - 1) / 2;

// Moving directions will be right -> down -> left -> up
const rowDirs = [0, +1, 0, -1];
const colDirs = [+1, 0, -1, 0];

const getOut = (maze) => {
    const findPath = (row, col, direction, arr, currentPath, wayOut) => {
        const endRow = arr.length - 1;
        const endCol = arr[row].length - 1;
        const currentCell = arr[row][col];
        if (row === endRow || row === 0 || col === endCol || col === 0) {
            // EXIT FROM THE MAZE
            wayOut.push([...currentPath]);
            return;
        }

        if (currentCell === 'X' || currentCell === '@') {
            direction += 1;
            direction %= 4;
        }

        arr[row][col] = '@';
        row += rowDirs[direction];
        col += colDirs[direction];
    };
    const wayOut = [];
    findPath(startRow, startCol, 0, maze, [], wayOut);
    return wayOut;
};

getOut(matrix);
