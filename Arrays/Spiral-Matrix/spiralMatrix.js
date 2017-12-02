const N = 3;

/*
1 2 3
8 9 4
7 6 5
 */

function spiral(matrixSize) {
    const matrix = [];
    for (let i = 0; i < N; i += 1) {
        const row = Array.from({
            length: N,
        });

        matrix.push(row);
    }

    let direction = 0; // 0 - right, 1 - down, 2 - left, 3 - up;
    let row = 0;
    let col = 0;

    const rowDirs = [0, +1, 0, -1]; // spiral directions follow -> right (row + 0), down (row + 1), left (row + 0), up (row - 1)
    const colDirs = [+1, 0, -1, 0]; // same here: right (col + 1), down (col + 0), left (col - 1), up (col + 0);

    for (let counter = 1; counter <= N * N; counter += 1) {
        matrix[row][col] = counter;
        const nextRow = row + rowDirs[direction];
        const nextCol = col + colDirs[direction];

        if (nextRow >= N || nextRow < 0 ||
            nextCol >= N || nextCol < 0 ||
            matrix[nextRow][nextCol] !== undefined) {
            direction += 1;
            direction %= 4; // when direction = 4 => direction %= 4 = 0;
        }

        row += rowDirs[direction];
        col += colDirs[direction];
    }

    for (const row of matrix) {
        console.log(row);
    }
}

spiral(N);
