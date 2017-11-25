function solve(arr) {
    let tempMax = 1,
        max = 1;

    for (let i = 0; i < arr.length - 1; i += 1) {
        let currentNumber = parseInt(arr[i]),
            nextNumber = parseInt(arr[i + 1]);
        if (currentNumber === nextNumber) {
            tempMax += 1;
        } else if (max < tempMax) {
            max = tempMax;
            tempMax = 1;
        } else {
            tempMax = 1;
        }
    }
    if (max < tempMax) {
        max = tempMax;
    }
    console.log(max);
}