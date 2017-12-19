const randomArr = require('./selection-sort');

const countingSort = (arr, min, max) => {
    const counts = Array.from({
        length: max - min + 1,
    }).fill(0);

    for (let i = 0; i < arr.length; i += 1) {
        const index = arr[i] - min;
        counts[index] += 1;
    }

    const result = [];

    for (let i = 0; i < counts.length; i += 1) {
        let j = counts[i];
        while (j > 0) {
            result.push(i + min);
            j -= 1;
        }
    }

    return result;
};


const arr = randomArr(1, 11);
console.log(arr);
const sorted = countingSort(arr, 1, 10);
console.log(sorted);
