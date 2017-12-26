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
const test = ['2,1,0,2'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let result = '';

const numbers = gets().split(',').map(Number);

for (let i = 0; i < numbers.length; i += 1) {
    const decimalNum = numbers[i];
    let binaryNum = decimalNum.toString(2);
    while (binaryNum.length < 8) {
        binaryNum = '0' + binaryNum;
    }
    if (i % 2 === 0) {
        for (let j = 1; j < binaryNum.length; j += 2) {
            result += binaryNum[j];
        }
    } else {
        for (let j = 0; j < binaryNum.length; j += 2) {
            result += binaryNum[j];
        }
    }
}
print(result);
