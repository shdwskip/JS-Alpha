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
const test = ['6', '6 8 7 4 3 2'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const perm = gets().split(' ').map(Number);

let i = N - 1;
let j = N - 1;
let m = N - 1;

while (i >= 0 && perm[i] <= perm[i - 1]) {
    i -= 1;
}
if (i > 0) {
    while (j >= i) {
        if (perm[j] > perm[i - 1]) {
            [perm[j], perm[i - 1]] = [perm[i - 1], perm[j]];
            break;
        }
        j -= 1;
    }
}

while (i < m) {
    [perm[i], perm[m]] = [perm[m], perm[i]];
    i += 1;
    m -= 1;
}

print(perm.join(' '));
