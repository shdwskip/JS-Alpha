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
const test = ['1A2B3C4D5E6F'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const hexNumber = gets();
let binaryNumber = '';

const library = {
    0: '0000',
    1: '0001',
    2: '0010',
    3: '0011',
    4: '0100',
    5: '0101',
    6: '0110',
    7: '0111',
    8: '1000',
    9: '1001',
    A: '1010',
    B: '1011',
    C: '1100',
    D: '1101',
    E: '1110',
    F: '1111',
};

for (let i = 0; i < hexNumber.length; i += 1) {
    const current = hexNumber[i];
    binaryNumber += library[current];
}
binaryNumber = binaryNumber.replace(/^0+/g, '');
print(binaryNumber);
