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
const test = ['42'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
let factorial = '1';

// multiply big numbers
const multiply = (a, b) => {
    if ((a | 0) === '0' || (b | 0) === '0') {
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

for (let i = 2; i <= N; i += 1) {
    factorial = multiply(factorial, i.toString());
}

print(factorial);

// console.log(multiply(multiply('100', '99'), '98'));