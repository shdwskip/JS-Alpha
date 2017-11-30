let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const N = +gets();
const K = +gets();

const sequence = [];
let result = 0;

for (let i = 0; i < N; i += 1) {
    const number = +gets();
    sequence.push(number);
}

for (let i = 0; i < K; i += 1) {
    const maxElement = Math.max(...sequence);
    const index = sequence.indexOf(maxElement);
    sequence.splice(index, 1);
    result += maxElement;
}

print(result);
