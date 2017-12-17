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
let answer = '1';

const multiply = (a, b) => {
    if ((a | 0) === 0 || (b | 0) === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0; a[i] >= 0; i++) {
        for (let j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10, 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
};
for (let i = N; i > K; i -= 1) {
    answer = multiply(answer, i.toString());
}
print(answer);


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
