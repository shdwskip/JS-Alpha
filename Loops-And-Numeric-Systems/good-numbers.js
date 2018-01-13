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
const test = ['42 142'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const [start, end] = gets().split(' ').map(Number);
let goodNumbers = 0;

for (let number = start; number <= end; number += 1) {
    const len = Math.ceil(Math.log(number + 1) / Math.LN10); // len of a number without turning it to string
    let currentNumber = number;
    let count = 0;
    // let zeros = 0;

    while (currentNumber > 0) {
        if (number % (currentNumber % 10) === 0 || (currentNumber % 10) === 0) {
            count += 1;
            currentNumber = Math.floor(currentNumber / 10);
        } else {
            break;
        }
    }
    if (count === len) {
        goodNumbers += 1;
    }
}

print(goodNumbers);
