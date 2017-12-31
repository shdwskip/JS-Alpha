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
const test = ['110100010101100111100010011010101111001101111'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let binaryNumber = gets();
let hexNumber = '';

const library = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F',
};

for (let i = 0; i < binaryNumber.length; i += 4) {
    while (binaryNumber.length % 4 !== 0) {
        binaryNumber = '0' + binaryNumber;
    }
    const fourDigitBinary = binaryNumber.substr(i, 4);
    hexNumber += library[fourDigitBinary];
}
print(hexNumber);
// 1A2B3C4D5E6F
// print('000110100010101100111100010011010101111001101111'.length);