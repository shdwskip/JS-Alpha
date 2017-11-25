function solve(arr) {
    let allNumbers = +arr[0],
        len = arr.length;

    for (let i = 1; i < len - 1; i += 1){
        let minNumber = +arr[i];
        let minIndex = i;
        for (let j = i; j < len; j += 1){
            if (+arr[j] < minNumber) {
                minNumber = +arr[j];
                minIndex = j;
            }
        }
        let smallest = arr[i];
        arr[i] = minNumber;
        arr[minIndex] = smallest;
    }

    for (let i = 1; i <= allNumbers; i += 1){
        console.log(arr[i]);
    }
}


solve(['6', '3', '4', '1', '5', '2', '6']);