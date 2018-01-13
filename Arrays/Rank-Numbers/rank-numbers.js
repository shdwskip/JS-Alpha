// https://github.com/Minkov/dmoj-tasks/blob/master/contests/kids-2017-12/l3p3rankove/README.md

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
const test = [
    '5',
    '0 -5 4 -11 1'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

/* globals Map */

const N = +gets();
const numbers = gets().split(' ').map(Number);
const copyNumbers = numbers.slice().sort((a, b) => b - a);
// let len = numbers.length;
// let i = 0;

// const map = {};

// while (numbers.length !== 0) {
//     const currMax = Math.max(...numbers);
//     const indexOfMax = numbers.indexOf(currMax);
//     map[currMax] = i + 1;
//     numbers.splice(indexOfMax, 1);
//     // len -= 1;
//     i += 1;
// }

const answer = [];
for (let j = 0; j < N; j += 1) {
    // const currNumber = copyNumbers[j];
    answer.push(copyNumbers.indexOf(numbers[j]) + 1);
}

print(answer.join(' '));
