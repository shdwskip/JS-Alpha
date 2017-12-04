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
const test = ['1010101010101011'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const binary = gets();
const len = binary.length;
let decimal = 0;
for (let i = 0; i < len; i++) {
    if (binary[len - i - 1] === '0') {
        continue;
    }

    decimal += Math.pow(2, i);
}

print(decimal);