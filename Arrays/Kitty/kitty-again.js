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
    '@@@xx@*',
    '1 -1 -1 4'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const symbolsPath = gets().split('');
const kittyPath = gets().split(' ').map(Number);

let soulsCollected = 0;
let foodCollected = 0;
let deadlocks = 0;
let jumps = -1;
let trapped = false;
let catPos = 0;

const checkSymbol = (index) => {
    const currentSymbol = symbolsPath[index];
    if (currentSymbol === '') {
        return;
    } else if (currentSymbol === '@') {
        soulsCollected += 1;
        jumps += 1;
        symbolsPath[index] = '';
    } else if (currentSymbol === '*') {
        foodCollected += 1;
        jumps += 1;
        symbolsPath[index] = '';
    } else if (currentSymbol === 'x') {
        deadlocks += 1;
        jumps += 1;
        if (index % 2 === 0 && soulsCollected > 0) {
            soulsCollected -= 1;
            symbolsPath[index] = '@';
        } else if (index % 2 !== 0 && foodCollected > 0) {
            foodCollected -= 1;
            symbolsPath[index] = '*';
        } else {
            trapped = true;
        }
    }
};

checkSymbol(catPos);
for (let i = 0; i < kittyPath.length; i += 1) {
    if (trapped) {
        break;
    }
    let step = kittyPath[i];
    print(`step: ${step}`);
    if (step >= 0) {
        catPos = (catPos + step) % symbolsPath.length;
        print(`catPos positive: ${catPos}`);
        // catPos += catPos;
    } else if (step < 0) {
        print(`current catPos: ${catPos}`);
        catPos = symbolsPath.length - catPos - 1;
        print(`mirrored catPos: ${catPos}`);
        catPos = (catPos + step) % symbolsPath.length;
        print(`new catPos: ${catPos}`);
        catPos = symbolsPath.length - catPos - 1;
        print(`final catPos: ${catPos}`);
    }
    checkSymbol(catPos);
}

if (!trapped) {
    print(`Coder souls collected: ${soulsCollected}`);
    print(`Food collected: ${foodCollected}`);
    print(`Deadlocks: ${deadlocks}`);
} else {
    print('You are deadlocked, you greedy kitty!');
    print(`Jumps before deadlock: ${jumps}`);
}