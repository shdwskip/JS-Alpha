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
    '5',
'1',
'2',
'3',
'1',
'2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const allVotes = Array.from({
    length: 11,
}).fill(0);

for (let i = 0; i < N; i += 1) {
    const currentVote = +gets();
    allVotes[currentVote] += 1;
}

let missCat = Number.MAX_SAFE_INTEGER;
let maxVotes = 0;

for (let i = 0; i < allVotes.length; i += 1) {
    let currentVotes = allVotes[i];
    if (currentVotes > maxVotes) {
        missCat = i;
        maxVotes = currentVotes
    }
}
print(missCat);