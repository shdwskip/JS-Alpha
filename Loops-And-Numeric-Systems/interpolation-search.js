const interpolationSearch = (arr, key) => {
    let low = 0;
    let high = arr.length - 1;
    let middle;

    while (arr[low] <= key && arr[high] >= key) {
        middle = Math.trunc(low + ((key - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[middle] < key) {
            low = middle + 1;
        } else if (arr[middle] > key) {
            high = middle - 1;
        } else {
            return middle;
        }
    }

    if (arr[low] === key) {
        return low;
    }
    return -1;
};

const arr = [1, 5, 7, 10, 15, 21, 23, 76, 94, 302];
console.log(interpolationSearch(arr, 94));