function solve(N) {
    const arr = Array.from({ length: parseInt(N) });
    for (let i = 0; i < arr.length; i += 1) {
        console.log(i*5);
    }
}
solve(['5']);
