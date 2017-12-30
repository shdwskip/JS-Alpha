// https://github.com/Minkov/dmoj-tasks/blob/master/easy/03arrays/25tubes/README.md

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
    '4',
    '11',
    '803',
    '777',
    '444',
    '555'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const allTubes = +gets();
const neededTubes = +gets();
const sizes = [];
let biggestTube = 0;
for (let i = 0; i < allTubes; i += 1) {
    const current = +gets();
    sizes.push(current);
    if (biggestTube < current) {
        biggestTube = current;
    }
}

let left = 0;
let right = biggestTube;
let middle = ((left + right) / 2) | 0;
let finalResult = -1;

while (left <= right) {
    let maxTubeSize = 0;

    for (let i = 0; i < allTubes; i += 1) {
        maxTubeSize += Math.trunc(sizes[i] / middle);
    }

    if (maxTubeSize < neededTubes) {
        right = middle - 1;
    } else if (maxTubeSize >= neededTubes) {
        left = middle + 1;
        finalResult = middle;
    }
    middle = ((left + right) / 2) | 0;
}
print(finalResult);
