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
const test = ['1AE3'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const hexNum = gets();
const hexNumLen = hexNum.length;
let decNum = 0;

for (let i = 0; i < hexNumLen; i += 1) {
    let hexDigit = hexNum[i];
    switch (hexDigit) {
        case 'A':
            hexDigit = 10;
            break;
        case 'B':
            hexDigit = 11;
            break;
        case 'C':
            hexDigit = 12;
            break;
        case 'D':
            hexDigit = 13;
            break;
        case 'E':
            hexDigit = 14;
            break;
        case 'F':
            hexDigit = 15;
            break;
        default:
            break;
    }
    decNum = +hexDigit + decNum * 16;
}
print(decNum);