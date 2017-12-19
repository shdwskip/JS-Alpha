const randomArr = require('./selection-sort');
const merge = (left, right) => {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i += 1;
        } else {
            result.push(right[j]);
            j += 1;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i += 1;
    }

    while (j < right.length) {
        result.push(right[j]);
        j += 1;
    }
    return result;
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = (arr.length / 2) | 0;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
};

const arr = randomArr(1, 11);
console.log(arr);
const sortedArr = mergeSort(arr);
console.log(sortedArr);
