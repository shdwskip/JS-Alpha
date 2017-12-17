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
const test = ['1',
    '10',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const B = gets();
const N = +gets();
let binaryDigits = 0;
for (let i = 0; i < N; i += 1) {
    const currentNumber = +gets();
    const binary = currentNumber.toString(2);
    for (let j = 0; j < binary.length; j += 1) {
        if (binary[j] === B) {
            binaryDigits += 1;
        }
    }
    print(binaryDigits);
    binaryDigits = 0;
}
