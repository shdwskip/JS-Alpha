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
const test = ['5'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const cols = +gets();
const rows = 2 * cols - 1;

const result = [];

for (let row = 0; row < rows; row += 1) {
    let line = '';
    for (let col = 0; col < cols; col += 1) {
        if (row === col) {
            line += '*';
        } else if (row < cols) {
            line += '.';
        }
    }
    if (row === cols) {
        break;
    }
    result.push(line);
}
result.forEach((path) => print(path));
for (let i = result.length - 2; i >= 0; i -= 1) {
    print(result[i]);
}
