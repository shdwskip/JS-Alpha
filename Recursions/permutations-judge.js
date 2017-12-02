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
const test = '3';
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const source = [];
for (let i = 1; i <= N; i += 1) {
    source.push(i);
}
const getPermutations = (arr) => {
    const generatePermutations = (index, current, used, values, permutations) => {
        if (index === values.length) {
            permutations.push([...current]);
            return;
        }

        for (let i = 0; i < values.length; i += 1) {
            if (used[i]) {
                continue;
            }
            const next = values[i];
            current[index] = next;
            // set visited to true
            used[i] = true;
            generatePermutations(index + 1, current, used, values, permutations);
            // all visited are true, and now we go back and set the first to false;
            used[i] = false;
        }
    };
    const permutations = [];
    generatePermutations(0, [], {}, arr, permutations);
    return permutations;
};

getPermutations(source)
    .forEach((perm) => print(perm.join(' ')));
