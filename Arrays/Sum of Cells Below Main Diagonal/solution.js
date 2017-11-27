let matrix = [
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 5, 6],
    [4, 5, 6, 1, 7],
    [5, 6, 7, 8, 1]
];
let sum = 0;

for (let row = 0; row < matrix.length; row += 1){
    for (let col = 0; col <= row; col += 1){
        sum += matrix[row][col];
    }
}

console.log(sum);