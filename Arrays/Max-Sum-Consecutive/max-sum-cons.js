/* eslint-disable */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the local test
const test = [4, 2, 3, -5, 4];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const sequence = [];

for (let i = 0; i < N; i += 1) {
    const number = +gets();
    sequence.push(number);
}

let result = sequence[0];
let maxResult = sequence[0];
for (let i = 1; i < sequence.length; i += 1) {
    const currentNumber = sequence[i];
    result = Math.max(currentNumber, result + currentNumber);
    maxResult = Math.max(result, maxResult);
}

print(maxResult);
