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
    '2 2',
    '0 0',
    '1 0',
    '0 1',
    '0 1',
    'Shoot 1 1',
    'END',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const [R, C] = gets().split(' ').map(Number);
const p1Board = [];
const p2Board = [];
let i = 0;

// generate board with ships
while (i < 2 * R) {
    if (i >= R) {
        for (let z = R - 1; z >= 0; z -= 1) {
            p2Board[z] = gets().split(' ').map(Number).reverse();
            i += 1;
        }
    } else {
        p1Board[i] = gets().split(' ').map(Number);
    }
    i += 1;
}

let line;
let counter = 0;

while ((line = gets()) !== 'END') {
    const [shoot, shR, shC] = line.split(' ');
    if (counter % 2 === 0) {
        if (p2Board[shR][shC] === 'X') {
            print('You already shot there!');
        } else if (p2Board[shR][shC] === 1) {
            print('Booom');
            p2Board[shR][shC] = 'X';
        } else if (p2Board[shR][shC] === 0) {
            print('Missed');
            p2Board[shR][shC] = 'X';
        }
    } else {
        if (p1Board[shR][shC] === 'X') {
            print('You already shot there!');
        } else if (p1Board[shR][shC] === 1) {
            print('Booom');
            p1Board[shR][shC] = 'X';
        } else if (p1Board[shR][shC] === 0) {
            print('Missed');
            p1Board[shR][shC] = 'X';
        }
    }
    counter += 1;
}

let p1ShipsLeft = 0;
let p2ShipsLeft = 0;

for (let row = 0; row < p1Board.length; row += 1) {
    for (let col = 0; col < p1Board[row].length; col += 1) {
        if (p1Board[row][col] === 1) {
            p1ShipsLeft += 1;
        }
    }
}

for (let row = 0; row < p2Board.length; row += 1) {
    for (let col = 0; col < p2Board[row].length; col += 1) {
        if (p2Board[row][col] === 1) {
            p2ShipsLeft += 1;
        }
    }
}

print(`${p1ShipsLeft}:${p2ShipsLeft}`);