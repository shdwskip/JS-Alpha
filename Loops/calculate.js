/* Write a program that, for a given two numbers N and x, calculates the sum
S = 1 + 1!/x + 2!/x^2 + … + N!/x^N.
Use only one loop.
Print the result with 5 digits after the decimal point. */

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
const test = ['5', '-4'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const x = +gets();

let sum = 1 + (1 / x);
let divident = 1;
let divisor;
for (let i = 2; i <= N; i += 1) {
    divident *= i;
    divisor = Math.pow(x, i);
    sum += (divident / divisor);
}
print(sum.toFixed(5));
