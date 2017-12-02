/* eslint-disable */
function solve(input) {
    input.splice(0, 1);
    input = input.map(x => +x);
    const getMax = (arr, startIndex, endIndex) => {
        let index = startIndex;
        for (let i = startIndex; i < endIndex + 1; i += 1) {
            if (arr[index] < arr[i]) {
                index = i;
            }
        }
        return index;
    };

    const sortArr = (arr) => {
        const endIndex = arr.length - 1;
        for (let i = endIndex; i >= 0; i -= 1) {
            const currentNumber = arr[i];
            const maxNumberIndex = getMax(arr, 0, i);
            const currentMaxNumber = arr[maxNumberIndex];

            if (currentMaxNumber >= currentNumber) {
                arr[maxNumberIndex] = currentNumber;
                arr[i] = currentMaxNumber;
            }
        }
        return arr.join(' ');
    };
    console.log(sortArr(input));
    
};

solve(['10', '100', '2', '1', '10', '20', '27', '28', '30', '31', '34', '36', '38']);