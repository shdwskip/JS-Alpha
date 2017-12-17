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
const test = ['185'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const number = gets();
const first = +number[0];
const second = +number[1];
const third = +number[2];

const sum = first + second + third;
const multiplication = first * second * third;

const sumAndMultip = first + second * third;
const multipAndSum = first * second + third;

print(Math.max(sum, multipAndSum, sumAndMultip, multiplication));
