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
const test = ['19960229'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

// https://github.com/Minkov/dmoj-tasks/blob/master/problems/intermediate/06bruteforce/01numerology/README.md

const calculateNeighbors = (digits, result) => {
    if (digits.length < 2) {
        result[digits[0]] += 1;
        return;
    }
    for (let i = 0; i < digits.length - 1; i += 1) {
        const x = digits[i];
        const y = digits[i + 1];
        const score = (x + y) * (x ^ y) % 10;

        digits[i + 1] = score;
        digits.splice(i, 1);
        calculateNeighbors(digits, result);
        digits.splice(i, 0, x);
        digits[i + 1] = y;
    }
};

const digitsArr = gets().split('').map(Number);
const answer = Array.from({
    length: 10,
}).fill(0);

calculateNeighbors(digitsArr, answer);

print(answer.join(' '));
