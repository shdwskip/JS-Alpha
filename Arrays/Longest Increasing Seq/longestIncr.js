const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const N = +gets();
const sequence = [];
let tempMax = 1;
let maxSeq = 1;

for (let i = 0; i < N; i += 1) {
    const number = +gets();
    sequence.push(number);
}

for (let i = 0, len = sequence.length; i < len - 1; i += 1) {
    const currentNumber = sequence[i];
    const nextNumber = sequence[i + 1];

    if (currentNumber < nextNumber) {
        tempMax += 1;
    } else if (maxSeq < tempMax) {
        maxSeq = tempMax;
        tempMax = 1;
    } else {
        tempMax = 1;
    }
}

if (maxSeq < tempMax) {
    maxSeq = tempMax;
}

print(maxSeq);
