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
const test = ['591 5'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const nAndM = gets().split(' ').map(Number);
const N = nAndM[0];
const M = nAndM[1];
const S = [];
const result = [];

for (let i = 0; i <= M; i += 2) {
    S[i] = N + i;
    result.push(S[i]);
    S[i + 1] = S[i] + 1;
    result.push(S[i + 1]);
    S[i + 2] = 2 * N + i + 1;
    result.push(S[i + 2]);
}
print(result[M-1]);
