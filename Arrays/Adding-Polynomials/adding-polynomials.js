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
const test = ['3', '5 0 1', '7 4 -3'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const firstPolynomial = gets().split(' ').map(Number);
const secondPolynomial = gets().split(' ').map(Number);
let sum = 0;
const resultArr = [];

for (let i = 0; i < firstPolynomial.length; i += 1) {
    sum += firstPolynomial[i] + secondPolynomial[i];
    resultArr.push(sum);
    sum = 0;
}

print(resultArr.join(' '));
