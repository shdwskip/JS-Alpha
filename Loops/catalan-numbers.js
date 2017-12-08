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
const test = ['100'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
let product = 1;

// dealing with e+ (a lot of zeros at the end) ---found on Internet
// const toFixed = (x) => {
//     if (Math.abs(x) < 1.0) {
//         const e = parseInt(x.toString().split('e-')[1], 10);
//         if (e) {
//             x *= Math.pow(10, e - 1);
//             x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
//         }
//     } else {
//         let e = parseInt(x.toString().split('+')[1], 10);
//         if (e > 20) {
//             e -= 20;
//             x /= Math.pow(10, e);
//             x += (new Array(e + 1)).join('0');
//         }
//     }
//     return x;
// };

// another dealing with e+ from Internet
const toFix2 = (i) => {
    let str = '';
    do {
        const a = i % 10;
        i = Math.trunc(i / 10);
        str = a + str;
    } while (i > 0);
    return str;
};

for (let k = 2; k <= N; k += 1) {
    const divident = N + k;
    product *= (divident / k);
}
product = Math.round(product);
// const result = toFixed(product);
// print(result);
const result2 = toFix2(product);
print(result2);
