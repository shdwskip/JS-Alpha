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
const test = ['@x@@**xx@*@@', '-8 -11 16 11 -26 -6 -8 -16 10 10 -43 31 -28 -9 -36 9 -2 -41 11'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const symbols = gets().split('');
const moves = gets().split(' ').map(Number);
const allMoves = moves.length;
const allSymbols = symbols.length;

let soulsCollected = 0;
let foodCollected = 0;
let deadLocks = 0;
let totalJumps = 0;
let catched = false;
let catPos = 0;
let currentSymbol;

const checkSymbol = (move) => {
    currentSymbol = symbols[move];
    if (currentSymbol === '') {
        return;
    } else if (currentSymbol === '@') {
        soulsCollected += 1;
        totalJumps += 1;
        symbols[move] = '';
    } else if (currentSymbol === '*') {
        foodCollected += 1;
        totalJumps += 1;
        symbols[move] = '';
    } else if (currentSymbol === 'x') {
        deadLocks += 1;
        if (move % 2 === 0 && soulsCollected > 0) {
            soulsCollected -= 1;
            symbols[move] = '@';
            // something more
        } else if (move % 2 !== 0 && foodCollected > 0) {
            foodCollected -= 1;
            symbols[move] = '*';
            // something more
        } else {
            catched = true;
            print(`You are deadlocked, you greedy kitty!`);
            print(`Jumps before deadlock: ${totalJumps}`);
        }
    }
};
checkSymbol(catPos);

for (let i = 0; i <= allMoves; i += 1) {
    if (catched) {
        break;
    }
    const step = moves[i];
    if (step < 0) {
        catPos = (catPos + step) % allSymbols;
        if (catPos < 0) {
            catPos += allSymbols;
        } else if (catPos === -0) {
            catPos = 0;
        }
    } else {
        catPos = (catPos + step) % allSymbols;
    }
    checkSymbol(catPos);
}

if (!catched) {
    print(`Coder souls collected: ${soulsCollected}`);
    print(`Food collected: ${foodCollected}`);
    print(`Deadlocks: ${deadLocks}`);
}
