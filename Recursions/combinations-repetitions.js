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
const test = ['3 2'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const [n, k] = gets().split(' ').map(Number);

const combinationsWithRep = (n, k, index, combination) => {
    if (index === k) {
        print(...combination);
        return;
    }
    const startIndex = index === 0 ? 1 : combination[index - 1];

    for (let i = startIndex; i <= n; i += 1) {
        combination[index] = i;
        combinationsWithRep(n, k, index + 1, combination);
    }
};

combinationsWithRep(n, k, 0, []);
