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
const test = [4];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();

for (let row = 1; row <= N; row += 1) {
    let line = '';
    for (let col = row; col <= row + N - 1; col += 1) {
        line += col + ' ';
        if (col === row + N - 1) {
            line.trim();
            print(line);
        }
    }
}
