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
    '1',
    '2',
    '7',
    '11'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const previousThree = [];
for (let i = 0; i < 3; i += 1) {
    previousThree[i] = +gets();
}
const lines = +gets();

let temp = previousThree;
let sum;
let i = 3;
let nTribonacciNumber = 0;

if (lines === 1) {
    print(previousThree[0]);
} else if (lines === 2) {
    print(previousThree[0]);
    print(previousThree[1], previousThree[2]);
} else {
    for (let el = 1; el <= lines; el += 1) {
        nTribonacciNumber += el;
    }
    while (i < nTribonacciNumber) {
        temp = temp.slice(temp.length - 3);
        sum = temp.reduce((a, b) => a + b, 0);
        temp.push(sum);
        previousThree.push(sum);
        i += 1;
    }
    for (let z = 0; z < lines; z += 1) {
        let line = '';
        for (let j = z; j < (2 * z + 1); j += 1) {
            line += previousThree.shift() + ' ';
        }
        print(line.trim());
    }
}
