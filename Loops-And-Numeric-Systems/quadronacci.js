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
    '-5',
    '1',
    '2',
    '3',
    '4'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const firstFour = [];
for (let i = 0; i < 4; i += 1) {
    firstFour[i] = +gets();
}
let temp = firstFour;
const rows = +gets();
const cols = +gets();
const nQuadronacciNumber = rows * cols;
let i = 4;
let sum;

while (i < nQuadronacciNumber) {
    temp = temp.slice(temp.length - 4);
    sum = temp.reduce((a, b) => a + b, 0);
    temp.push(sum);
    firstFour.push(sum);
    i += 1;
}

for (let row = 0; row < rows; row += 1) {
    let line = '';
    for (let col = 0; col < cols; col += 1) {
        line += firstFour.shift() + ' ';
    }
    print(line.trim());
}
