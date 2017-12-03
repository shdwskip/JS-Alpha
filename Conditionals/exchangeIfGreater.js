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
const test = [];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const A = +gets();
const B = +gets();

if (A > B) {
    print(B + ' ' + A);
} else if (A < B) {
    print(A + ' ' + B);
} else {
    print(A + ' ' + B);
}
