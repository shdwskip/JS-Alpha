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
const test = ['120'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();

// const factorial = (number) => {
//     if (number === 0 || number === 1) {
//         return 1;
//     }

//     return number * factorial(number-1);
// };

// let factorialResult = factorial(N);

let result = Math.floor(N / 5);
let trailingZeros = result;

while (result >= 5) {
    result = Math.floor(result / 5);
    trailingZeros += result;
}

print(Math.floor(trailingZeros));
