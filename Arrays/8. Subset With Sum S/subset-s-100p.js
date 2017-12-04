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
const test = ['14', '2 1 2 4 3 5 2 6'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const S = +gets();
const sequence = gets().split(' ')
                     .map(Number)
                     .sort((x, y) => y - x);
const len = sequence.length;
let sum = 0;
let answer = 'no';
for (let i = 0; i < len; i += 1) {
    for (let j = i; j < len; j += 1) {
        if (S >= sum + sequence[j]) {
            sum += sequence[j];
            if (sum === S) {
                answer = 'yes';
                break;
            }
        }
    }
    sum = 0;
}
print(answer);
