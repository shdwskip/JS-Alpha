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
const test = ['5', '2 1 1 6 3'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const numbers = gets().split(' ').map(Number);

let oddsProduct = 1;
let evensProduct = 1;

for (let i = 0; i < N; i += 1) {
    const current = numbers[i];
    if (i % 2 === 0) {
        evensProduct *= current;
    } else {
        oddsProduct *= current;
    }
}

if (oddsProduct === evensProduct) {
    print('yes ' + evensProduct);
} else {
    print(`no ${oddsProduct} ${evensProduct}`);
}
