// O(n)

const randomArr = require('./selection-sort');
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i += 1) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j -= 1;
        }
    }
    return [...arr];
};

const arr = randomArr(1, 11);
console.log(arr);
insertionSort(arr);
console.log(arr);
