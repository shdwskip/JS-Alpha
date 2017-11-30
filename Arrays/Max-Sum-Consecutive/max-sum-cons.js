const N = +gets();
const sequence = [];

for (let i = 0; i < N; i += 1) {
    const number = +gets();
    sequence.push(number);
}

let result = sequence[0];
let maxResult = sequence[0];
for (let i = 0; i < sequence.length; i += 1) {
    const currentNumber = sequence[i];
    result = Math.max(currentNumber, result + currentNumber);
    maxResult = Math.max(result, maxResult);
}

print(maxResult);
