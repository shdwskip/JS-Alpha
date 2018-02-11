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
const test = ['8'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let N = +gets();

let counter = 0;

while (N > 0) {
    counter += 1;
    N -= counter;
    if (N < (counter + 1)) {
        break;
    }
}
print(counter);
