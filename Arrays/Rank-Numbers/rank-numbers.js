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
const test = ['4', '10 1 15 9'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

/* globals Map */

const N = +gets();
const numbers = gets().split(' ').map(Number);
const copyNumbers = numbers.slice();
let len = numbers.length;
let i = 0;

const map = new Map();

while (len !== 0) {
    const currMax = Math.max(...numbers);
    const indexOfMax = numbers.indexOf(currMax);
    map.set(currMax, i + 1);
    numbers.splice(indexOfMax, 1);
    len -= 1;
    i += 1;
}

const answer = [];
for (let j = 0; j < N; j += 1) {
    const currNumber = copyNumbers[j];
    answer.push(map.get(currNumber));
}

print(answer.join(' '));
