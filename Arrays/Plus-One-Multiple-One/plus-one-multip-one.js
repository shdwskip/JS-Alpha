/* We are given the following sequence:

    S1 = N;
    S2 = S1 + 1;
    S3 = 2*S1 + 1;
    S4 = S1 + 2;
    S5 = S2 + 1;
    S6 = 2*S2 + 1;
    S7 = S2 + 2;
Your task is to write a program, that by given N and M,
finds the Mth member of the sequence */

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
const test = ['2 9'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const nAndM = gets().split(' ').map(Number);
const N = nAndM[0];
const M = nAndM[1];
const S = {
    1: N,
};
let holdNumber = 2;
let counter = 1;
while (!S[M]) {
    for (let j = 2; j < 5; j += 1) {
        if (j === 2) {
            S[holdNumber] = S[counter] + 1;
        } else if (j === 3) {
            S[holdNumber] = 2 * S[counter] + 1;
        } else {
            S[holdNumber] = S[counter] + 2;
        }
        holdNumber += 1;
    }
    counter += 1;
}
print(S[M]);
