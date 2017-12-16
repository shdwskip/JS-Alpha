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
    '0',
    '10,20,30,40,50',
    '2 forward 1',
    '2 backwards 1',
    '3 forward 2',
    '3 backwards 2',
    'exit'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let index = +gets();
const numbers = gets().split(',').map(Number);
const len = numbers.length;
let command;
let forwardSum = 0;
let backwardsSum = 0;

while ((command = gets()) !== 'exit') {
    const args = command.split(' ');
    const steps = +args[0];
    const direction = args[1];
    const stepSize = +args[2];
    for (let i = 0; i < steps; i += 1) {
        if (direction === 'forward') {
            index = (stepSize + index) % len;
            forwardSum += numbers[index];
        } else {
            index = len - index - 1;
            index = (stepSize + index) % len;
            index = len - index - 1;
            backwardsSum += numbers[index];
        }
    }
}

print(`Forward: ${forwardSum}`);
print(`Backwards: ${backwardsSum}`);
