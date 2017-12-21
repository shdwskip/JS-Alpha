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
const test = ['10'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const topSide = +gets();
const bottomSide = 2 * topSide;
const height = topSide + 1;

for (let row = 0; row < height; row += 1) {
    let line = '';
    for (let col = 0; col < bottomSide; col += 1) {
        if (row === 0 && col < topSide) {
            line += '.';
        } else if (row === 0 && col >= topSide) {
            line += '*';
        } else if (col === (topSide - row) || col === bottomSide - 1 || row === height - 1) {
            line += '*';
        } else {
            line += '.';
        }
    }
    print(line);
}
