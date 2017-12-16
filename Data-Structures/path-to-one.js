// https://github.com/Minkov/dmoj-tasks/blob/master/intermediate/01linearstructures/01pathtoone/README.md

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
const test = ['15'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let N = +gets();

let count = 0;

// https://stackoverflow.com/questions/39588554/minimum-number-of-steps-to-reduce-number-to-1

while (N > 1) {
    // const binary = N.toString(2);
    if (N % 2 === 0) {
        N /= 2;
    } else if (N === 3 || N % 4 === 1) {
        N -= 1;
    } else {
        N += 1;
    }
    count += 1;
}

print(count);
