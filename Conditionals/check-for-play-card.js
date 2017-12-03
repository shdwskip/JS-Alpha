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
const test = [];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
    'J', 'Q', 'K', 'A',
];

const input = gets();

const indx = cards.indexOf(input);

if (indx >= 0) {
    print('yes ' + input);
} else {
    print('no ' + input);
}
