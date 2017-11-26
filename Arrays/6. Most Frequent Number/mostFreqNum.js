function solve(arr) {
    let len = +arr.shift(),
        tempRepeat = 1,
        mostRepeat = 1,
        repeatingNumber;

    arr.sort();

    for (let i = 0; i < len; i += 1){
        let currentNumber = arr[i],
            nextNumber = arr[i+1];

        if (currentNumber === nextNumber) {
            tempRepeat += 1;
        }else{
            tempRepeat = 1;
        }

        if (mostRepeat < tempRepeat) {
            mostRepeat = tempRepeat;
            repeatingNumber = +arr[i];
        }
    }
    
    console.log(`${repeatingNumber} (${mostRepeat} times)`);
}
solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);