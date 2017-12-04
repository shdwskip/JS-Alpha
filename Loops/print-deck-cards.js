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
const test = ['J'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let card = gets();

const signsArr = ['spades', 'clubs', 'hearts', 'diamonds'];

// check for number input and convert to number
if (+card) {
    card = +card;
} else {
    switch (card) {
        case 'J': card = 11; break;
        case 'Q': card = 12; break;
        case 'K': card = 13; break;
        case 'A': card = 14; break;
        default: break;
    }
}

for (let i = 2; i <= card; i += 1) {
    let cardFace = '';
    switch (i) {
        case 11: cardFace = 'J'; break;
        case 12: cardFace = 'Q'; break;
        case 13: cardFace = 'K'; break;
        case 14: cardFace = 'A'; break;
        default: cardFace = i; break;
    }
    let line = '';
    for (let sign = 0; sign < signsArr.length; sign += 1) {
        line += `${cardFace} of ${signsArr[sign]}, `;
    }
    const lastComma = line.lastIndexOf(', ');
    line = line.substr(0, lastComma);
    print(line);
}
