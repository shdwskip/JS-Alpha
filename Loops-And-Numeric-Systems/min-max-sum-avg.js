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
const test = ['3','2', '5', '1'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const numbers = [];

for (let i = 0; i < N; i += 1) {
    numbers[i] = +gets();
}

const len = numbers.length;
let sum = 0;

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

for (let i = 0; i < len; i += 1) {
    sum += numbers[i];
}

const average = sum / len;

print(`min=${minNumber.toFixed(2)}`);
print(`max=${maxNumber.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${average.toFixed(2)}`);
