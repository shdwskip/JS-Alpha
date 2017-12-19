// O(n*log n)

const randomArr = require('./selection-sort');
const getPivotIndex = (arr) => (arr.length / 2) | 0;

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const pivotIndex = getPivotIndex(arr);
    const pivot = arr[pivotIndex];
    let left = [];
    let right = [];

    for (let i = 0; i < pivotIndex; i += 1) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    for (let i = pivotIndex + 1; i < arr.length; i += 1) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
};

const arr = randomArr(1, 11);
console.log(arr);
const sortedArr = quickSort(arr);
console.log(sortedArr);
