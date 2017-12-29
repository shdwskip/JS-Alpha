Math.randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + min);

const generateRandomArray = (min, max) => {
    const result = [];
    for (let i = min; i < max; i += 1) {
        result.push(i);
    }

    for (let i = 0; i < result.length - 1; i += 1) {
        const randomIndex = Math.randomInt(i + 1, result.length);
        [result[randomIndex], result[i]] = [result[i], result[randomIndex]];
    }

    return result;
};

const randomArr = generateRandomArray(1, 11);
console.log('RANDOM ARRAY');
console.log(randomArr);

// SELECTION SORT

const selectionSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i += 1) {
        let current = i;
        for (let j = i + 1; j < len; j += 1) {
            if (arr[j] < arr[current]) {
                current = j;
            }
        }
        if (current !== i) {
            [arr[i], arr[current]] = [arr[current], arr[i]];
        }
    }
};

// selectionSort(randomArr);
// console.log('(SELECTION) SORTED RANDOM ARRAY');
// console.log(randomArr);

// BUBBLE SORT

const bubbleSort = (arr) => {
    const len = arr.length;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i += 1) {
            const current = arr[i];
            const next = arr[i + 1];
            if (current > next) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    // ANOTHER SOLUTION

    // while (!swapped) {
    //     swapped = true;
    //     for (let i = 0; i < len - 1; i += 1) {
    //         if (arr[i] > arr[i + 1]) {
    //             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    //             swapped = false;
    //         }
    //     }
    // }
};

// bubbleSort(randomArr);
// console.log('(BUBBLE) SORTED RANDOM ARRAY');
// console.log(randomArr);

// INSERTION SORT

const insertionSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j -= 1;
        }
    }

    // ANOTHER SOLUTION
    // for (let i = 0; i < len; i += 1) {
    //     for (let j = i; j > 0; j -= 1) {
    //         if (arr[j] < arr[j - 1]) {
    //             [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    //         }
    //     }
    // }
};

// insertionSort([randomArr]);
// console.log('(INSERTION) SORTED RANDOM ARRAY');
// console.log(randomArr);

// QUICK SORT
const getPivotIndex = (arr) => (arr.length / 2) | 0;
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = getPivotIndex(arr);
    const pivot = arr[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < pivotIndex; i += 1) {
        if (arr[i] <= pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    for (let i = pivotIndex + 1; i < arr.length; i += 1) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    less = quickSort(less);
    greater = quickSort(greater);

    return [...less, pivot, ...greater];
};

// const sortedArr = quickSort(randomArr);
// console.log('(QUICK) SORTED RANDOM ARRAY');
// console.log(sortedArr);

// MERGE SORT
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
    if (arr.length <= 1) {
        return arr;
    }
    const middle = (arr.length / 2) | 0;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
};

// const sortedArr = mergeSort(randomArr);
// console.log('(MERGE) SORTED RANDOM ARRAY');
// console.log(sortedArr);

// COUNTING SORT USING OBJECT

const countingSort = (arr) => {
    const valuesOccurrence = {};
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!valuesOccurrence[arr[i]]) {
            valuesOccurrence[arr[i]] = 1;
        } else {
            valuesOccurrence[arr[i]] += 1;
        }
    }

    for (const key in valuesOccurrence) {
        while (valuesOccurrence[key] > 0) {
            result.push(+key);
            valuesOccurrence[key] -= 1;
        }
    }

    return result;
};
// console.time('Object');
// const sortedArr = countingSort(randomArr);
// console.timeEnd('Object');
// console.log('(COUNTING) SORTED RANDOM ARRAY');
// console.log(sortedArr);

// COUNTING SORT USING ARRAY

const countingSort2 = (arr, min, max) => {
    const result = [];
    const counts = Array.from({
        length: max - min + 1,
    }).fill(0);

    for (let i = 0; i < arr.length; i += 1) {
        const shiftedIndex = arr[i] - min;
        counts[shiftedIndex] += 1;
    }

    for (let i = 0; i < counts.length; i += 1) {
        let j = counts[i];
        while (j) {
            result.push(i + min);
            j -= 1;
        }
    }
    return result;
};
// console.time('Array');
// const sortedArr2 = countingSort2(randomArr, 1, 10);
// console.timeEnd('Array');
// console.log('(COUNTING) SORTED RANDOM ARRAY');
// console.log(sortedArr2);
