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
const test = ['36', '18'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const K = +gets();
let result = 1;

for (let i = N; i > K; i -= 1) {
    result *= i;
}
print(result);

// // deal with integer overflow:
// const toFix = (number) => {
//     let str = '';
//     do {
//         const a = number % 10;
//         number = Math.trunc(number/10);
//         str = a + str;
//     } while (number > 0);
//     return str;
// };

// print(toFix(result));
