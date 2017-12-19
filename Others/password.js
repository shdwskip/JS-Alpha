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
const test = ['123456 4'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const input = gets().split(' ');

const number = input[0].split('');
const K = +input[1];
number.reverse();

const newNumber = parseInt(number.join(''), 10);

const quotient = Math.floor(newNumber / K);
const remainder = newNumber % K;
print(quotient + remainder);
