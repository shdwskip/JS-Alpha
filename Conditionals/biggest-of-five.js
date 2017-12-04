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
const test = ['-10', '-20', '20', '30', '200'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const x = +gets();
const y = +gets();
const z = +gets();
const t = +gets();
const v = +gets();

if (x >= y && x >= z && x >= t && x >= v) {
    print(x);
} else if (y >= x && y >= z && y >= t && y >= v) {
    print(y);
} else if (z >= x && z >= y && z >= t && z >= v) {
    print(z);
} else if (t >= x && t >= y && t >= z && t >= v) {
    print(t);
} else {
    print(v);
}
