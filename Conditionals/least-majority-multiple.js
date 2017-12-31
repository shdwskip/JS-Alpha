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
    '3',
    '5',
    '7',
    '11',
    '13',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

let countDivide;

for (let i = 3; i <= a * b * c; i += 1) {
    countDivide = 0;
    if (i % a === 0) {
        countDivide += 1;
    }

    if (i % b === 0) {
        countDivide += 1;
    }

    if (i % c === 0) {
        countDivide += 1;
    }

    if (i % d === 0) {
        countDivide += 1;
    }

    if (i % e === 0) {
        countDivide += 1;
    }

    if (countDivide >= 3) {
        print(i);
        break;
    }
}