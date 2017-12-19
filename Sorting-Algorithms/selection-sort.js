const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        let bestIndex = i;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < arr[bestIndex]) {
                bestIndex = j;
            }
        }

        if (bestIndex !== i) {
            [arr[bestIndex], arr[i]] = [arr[i], arr[bestIndex]];
        }
    }
};

// O(n^2)
