function solve(N) {
    for (let row = 0; row < N; row += 1){
        let line = "";
        for (let col = 0; col <= row; col += 1){
            line += `${col + 1}`;
        }
        console.log(line);
    }
}

solve(10);