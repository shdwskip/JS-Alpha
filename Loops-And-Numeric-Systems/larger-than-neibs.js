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
const test = ['6', '-26 -25 -28 31 2 27'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const arr = gets().split(' ').map(Number);

for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i+1]) {
        print(i);
        break;
    }
}
