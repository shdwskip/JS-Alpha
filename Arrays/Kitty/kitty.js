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
const test = ['@@@xx@*',
    '1 -1 -1 4'
];
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
let totalJumps = -1;
let trapped = false;
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
        totalJumps += 1;
        if (move % 2 === 0 && soulsCollected > 0) {
            soulsCollected -= 1;
            symbols[move] = '@';
        } else if (move % 2 !== 0 && foodCollected > 0) {
            foodCollected -= 1;
            symbols[move] = '*';
        } else {
            trapped = true;
            print(`You are deadlocked, you greedy kitty!`);
            print(`Jumps before deadlock: ${totalJumps}`);
        }
    }
};
checkSymbol(catPos);

for (let i = 0; i <= allMoves; i += 1) {
    if (trapped) {
        break;
    }
    const step = moves[i];
    if (step < 0) {
        // catPos = allSymbols - catPos - 1;
        // catPos = (catPos + step) % allSymbols;
        // catPos = allSymbols - catPos - 1;
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

if (!trapped) {
    print(`Coder souls collected: ${soulsCollected}`);
    print(`Food collected: ${foodCollected}`);
    print(`Deadlocks: ${deadLocks}`);
}
