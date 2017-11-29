function solve(arr) {
    let len = +arr.shift(),
        numberX = +arr.pop(),
        minIndex = 0,
        maxIndex = len - 1;

    while (minIndex <= maxIndex) {
        const middleIndex = Math.floor((minIndex + maxIndex) / 2);
        if (+arr[middleIndex] === numberX) {
            console.log(middleIndex);
            break;
        } else if (+arr[middleIndex] < numberX) {
            minIndex = middleIndex + 1;
        } else {
            maxIndex = middleIndex - 1;
        }
    }

    if (maxIndex < minIndex) {
        console.log(-1);
    }
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
