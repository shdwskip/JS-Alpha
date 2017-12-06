const rows = 9;
const cols = 11;
const maze = Array.from({
    length: rows,
});

for (let row = 0; row < rows; row += 1) {
    maze[row] = Array.from({
        length: cols,
    });
    for (let col = 0; col < cols; col += 1) {
        const randomNum = 10 * Math.random();
        if (randomNum >= 1 && randomNum <= 3 || randomNum > 6) {
            maze[row][col] = 'X';
        } else if (randomNum > 3 && randomNum <= 6) {
            maze[row][col] = ' ';
        } else {
            maze[row][col] = ' ';
        }
    }
}

const centerRow = (maze.length - 1) / 2;
const centerCol = (maze[0].length - 1) / 2;

maze[centerRow][centerCol] = 'S';
console.dir(maze);
