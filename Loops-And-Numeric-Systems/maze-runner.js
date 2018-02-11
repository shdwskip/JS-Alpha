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
    '8546',
    '2448',
    '4495',
    '6362',
    '7864',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();


for (let i = 0; i < N; i += 1) {
    let oddSum = 0;
    let evenSum = 0;
    const number = gets().split('').map(Number);
    for (let j = 0; j < number.length; j += 1) {
        const digit = number[j];
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    if (oddSum > evenSum) {
        print('right');
    } else if (oddSum < evenSum) {
        print('left');
    } else {
        print('straight');
    }
}