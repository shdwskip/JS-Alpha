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
const test = [
    '13',
    '-1',
    '7',
    '7',
    '-9223372036854775808',
    '7',
    '-9223372036854775808',
    '-3',
    '7',
    '0',
    '-1',
    '7',
    '0',
    '-3'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
/* globals Map */
const N = +gets();
const map = {};
const numbers = [];
// for (let i = 0; i < N; i += 1) {
//     numbers.push(gets());
// }
// let count = 1;
for (let i = 0; i < N; i += 1) {
    const current = gets();
    if (!map[current]) {
        map[current] = 1;
    } else {
        map[current] += 1;
    }
}

for (const key in map) {
    if (map[key] % 2 !== 0) {
        print(key);
        break;
    }
}
// let nextNumber;
// while (typeof (nextNumber = gets()) !== 'undefined') {
//     const count = map.get(nextNumber) || 1;
//     if (!map.get(nextNumber)) {
//         map.set(nextNumber, count);
//     } else {
//         map.set(nextNumber, count + 1);
//     }
// }

// map.forEach((value, key) => {
//     if (value % 2 !== 0) {
//         print(key);
//     }
// });