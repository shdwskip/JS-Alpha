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
const test = ['3884177021'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const number = gets().split('').map(Number);
let iterations = 0;

while (iterations < 10) {
    for (let i = number.length - 1; i >= 0; i -= 1) {
        if (number[i] !== 9) {
            number[i] += 1;
            if (number[i + 1] === 9 ) {
                number[i + 1] = 0;
            }
            break;
        } else if (i === 0) {
            number[i] += 1;
            number.fill(0, 1);
        } else {
            continue;
        }
    }
    print(number.join(''));
    iterations += 1;
}
