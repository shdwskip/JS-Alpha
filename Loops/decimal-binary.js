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
const test = ['12'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let decimalNumber = +gets();

let binaryNumber = '';
let remainder;
do {
    remainder = Math.floor(decimalNumber % 2);
    decimalNumber = Math.floor(decimalNumber / 2);
    binaryNumber = remainder.toString() + binaryNumber;
} while (decimalNumber > 0);
print(binaryNumber);
