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
const test = ['4 3', '8 4 3 3', '6 2 4'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const arrsLen = gets().split(' ').map(Number);
const firstArrLen = arrsLen[0];
const secondArrLen = arrsLen[1];

const firstArr = gets().split(' ').map(Number);
const secondArr = gets().split(' ').map(Number);
const resultArr = [];
let sum = 0;
const len = firstArrLen <= secondArrLen ? secondArrLen : firstArrLen;

for (let i = 0; i < len; i += 1) {
    if (typeof firstArr[i] === 'undefined') {
        firstArr[i] = 0;
    } else if (typeof secondArr[i] === 'undefined') {
        secondArr[i] = 0;
    }
    sum += firstArr[i] + secondArr[i];
    if (sum > 9) {
        const remainder = sum % 10;
        resultArr.push(remainder);
        const firstDigit = Math.floor(sum / 10);
        sum = firstDigit;
    } else {
        resultArr.push(sum);
        sum = 0;
    }
}
print(resultArr.join(' '));
