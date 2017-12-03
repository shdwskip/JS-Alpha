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

const N = +gets();
let result = 1;

if (N >= 1 && N <= 3) {
    result = N * 10;
} else if (N >= 4 && N <= 6) {
    result = N * 100;
} else if (N >= 7 && N <= 9) {
    result = N * 1000;
} else if (N < 0 || N > 9) {
    print('invalid score');
}
