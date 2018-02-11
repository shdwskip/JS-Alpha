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
const test = ['1337'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();

let paperPieces = 2 * N;

const paperSizes = Array.from({
    length: 11,
});

paperSizes[0] = 2048;

for (let i = 1; i < paperSizes.length; i += 1) {
    paperSizes[i] = paperSizes[i - 1] / 2;
}


for (let i = 0; i < paperSizes.length; i += 1) {
    if (paperPieces - paperSizes[i] >= 0) {
        paperPieces -= paperSizes[i]; 
    } else {
        print(`A${i}`);
    }
}
