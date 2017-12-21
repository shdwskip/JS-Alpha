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
    '6',
    '1 1 1 1 1 1'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// razpishi variant sus Stack - reverse masiva

const size = +gets();
const arr = gets().split(' ').map(Number);

const jumps = Array.from({
    length: size,
}).fill(0);

for (let i = size - 1; i > -1; i -= 1) {
    let j = i + 1;
    while (j < size) {
        if (arr[j] > arr[i]) {
            jumps[i] = jumps[j] + 1;
            break;
        } else if (arr[j] === 0) {
            break;
        }
        j += 1;
    }
}
print(Math.max(...jumps));
print(jumps.join(' '));
