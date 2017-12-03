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
const test = ['60 40'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const numbers = gets().split(' ').map(Number);
let A = +numbers[0];
let B = +numbers[1];

//  Euclidean algorithm
while (B !== 0) {
    const temp = B;
    B = A % B;
    A = temp;
}
print(A);
