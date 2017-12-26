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
    '1 4 2 6 3 4'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// razpishi variant sus Stack - reverse masiva

const size = +gets();
const arr = gets().split(' ').map(Number);

arr.reverse();
const jumps = [0];
const holdValues = [arr[0]];

for (let i = 1; i < size; i += 1) {
    if (arr[i] < holdValues[holdValues.length - 1]) {
        holdValues.push(arr[i]);
        jumps.push(holdValues.length - 1);
    } else {
        while (holdValues.length - 1 >= 0 && arr[i] >= holdValues[holdValues.length - 1]) {
            holdValues.pop();
        }
        holdValues.push(arr[i]);
        jumps.push(holdValues.length - 1);
    }
}
print(Math.max(...jumps));
print(jumps.reverse().join(' '));
