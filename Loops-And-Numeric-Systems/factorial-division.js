/* In combinatorics, the number of ways to choose N different
members out of a group of N different elements
(also known as the number of combinations) is calculated by the
following formula: N! / (K! * (N - K)!)
For example, there are 2598960 ways to withdraw 5 cards
out of a standard deck of 52 cards.
Your task is to write a program that calculates N! / (K! * (N - K)!)
for given N and K. */
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
const test = ['52', '5'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
const N = +gets();
const K = +gets();
const difference = N - K;
let divident = 1;
let divisor = 1;

for (let i = N; i > K; i -= 1) {
    divident *= i;
}

for (let j = 1; j <= difference; j += 1) {
    divisor *= j;
}

const result = divident / divisor;

print(Math.round(result));
