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
const test = ['4', '3', '2'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const A = +gets();
const B = +gets();
const C = +gets();

let first;
let second;
let third;

if (A >= B && A >= C) {
    first = A;
    if (B >= C) {
        second = B;
        third = C;
    } else {
        second = C;
        third = B;
    }
} else if (B >= A && B >= C) {
    first = B;
    if (A >= C) {
        second = A;
        third = C;
    } else {
        second = C;
        third = A;
    }
} else {
    first = C;
    if (A >= B) {
        second = A;
        third = B;
    } else {
        second = B;
        third = A;
    }
}
print(`${first} ${second} ${third}`);
