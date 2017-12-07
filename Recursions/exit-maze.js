const matrix = [
    ['X', 'X', 'X', ' ', 'X', 'X', ' ', 'X', 'X', 'X', 'X'],
    ['X', 'X', ' ', 'X', 'X', 'X', ' ', ' ', ' ', ' ', 'X'],
    ['X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', 'X', ' ', 'X'],
    ['X', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', 'X'],
    ['X', ' ', 'X', ' ', ' ', 'S', 'X', ' ', 'X', 'X', 'X'],
    [' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' ', 'X', 'X'],
    ['X', 'X', 'X', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' '],
    ['X', ' ', ' ', 'X', ' ', ' ', 'X', 'X', ' ', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', ' ', 'X', ' ', 'X', ' ', 'X'],
];

const startRow = (matrix.length - 1) / 2;
const startCol = (matrix[0].length - 1) / 2;

// Moving directions will be right -> down -> left -> up
const rowDirs = [0, +1, 0, -1];
const colDirs = [+1, 0, -1, 0];
const pathHolder = ['R', 'D', 'L', 'U'];

const getOut = (maze) => {
    const findPath = (row, col, dir, source, currentPath, wayOut) => {
        // GOING FORWARD
        const endRow = source.length - 1;
        const endCol = source[row].length - 1;
        if (row === endRow || row === 0 || col === endCol || col === 0) {
            // EXIT FROM THE MAZE
            wayOut.push([...currentPath]);
            return;
        }

        const firstDir = dir;
        while (true) {
            const nextRow = row + rowDirs[dir];
            const nextCol = col + colDirs[dir];
            if (source[nextRow][nextCol] === ' ') {
                row += rowDirs[dir];
                col += colDirs[dir];
                source[row][col] = '@';
                currentPath.push(`${pathHolder[dir]} -> `);
                break;
            } else {
                dir += 1;
                dir %= 4;
                if (dir === firstDir) {
                    return;
                }
            }
        }
        findPath(row, col, dir, source, currentPath, wayOut);
        // GOING BACKWARDS
        const dirHold = dir;
        while (true) {
            const nextRow = row + rowDirs[dir];
            const nextCol = col + colDirs[dir];
            if (nextRow > endRow || nextRow < 0 || nextCol > endCol || nextCol < 0 ||
                source[nextRow][nextCol] !== ' ') {
                dir += 1;
                dir %= 4;
                if (dir === dirHold) {
                    currentPath.pop();
                    source[row][col] = 'W';
                    break;
                }
            } else {
                source[row][col] = 'W';
                findPath(row, col, dir, source, currentPath, wayOut);
            }
        }
    };

    const wayOut = [];
    findPath(startRow, startCol, 0, maze, [], wayOut);
    for (const path of wayOut) {
        let line = '';
        for (const dir of path) {
            line += dir;
        }
        line += 'EXIT MADAFAKA!';
        console.log(line);
    }

    // return wayOut;
};

getOut(matrix);