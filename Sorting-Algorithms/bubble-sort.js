// O(n^2)
// best case: O(n) - if arr is sorted

const randomArr = require('./selection-sort');
const bubbleSort = (arr) => {
    let isSwapDone = false;

    while (!isSwapDone) {
        isSwapDone = true;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i + 1] < arr[i]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                isSwapDone = false;
            }
        }
    }
    return arr;
};

const arr = randomArr(1, 11);
console.log(arr);
bubbleSort(arr);
console.log(arr);
