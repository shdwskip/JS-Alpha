// https://github.com/Minkov/dmoj-tasks/blob/master/intermediate/03arrays/01indices/README.md

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
    '6',
    '1 2 3 5 7 1'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
/* globals Set */
const size = +gets();
const arr = gets().split(' ').map(Number);
const result = [];
let element = 0;

while (element < size && element >= 0) {
    if (result.indexOf(element) === -1) {
        result.push(element);
        element = arr[element];
    } else {
        result[result.indexOf(element)] = '(' + element;
        result[result.length - 1] = result[result.length - 1] + ')';
        break;
    }
}
// let line = '';
// for (let i = 0; i < result.length; i += 1) {
//     if (result[i][0] === '(') {
//         line += result[i];
//     } else {
//         line += ' ' + result[i];
//     }
// }
// print(line.trim());
print(result.join(' ').replace(/\s[(]/g, '('));

// if (result.indexOf(index) > -1) {
//     const indexToReplace = result.indexOf(index);
//     if (index !== 0) {
//         result = result.replace(' ' + result[indexToReplace], '(' + result[indexToReplace]);
//         result = result.trim();
//         result += ')';
//         break;
//     } else {
//         result = result.replace(result[indexToReplace], '(' + result[indexToReplace]);
//         result = result.trim();
//         result += ')';
//         break;
//     }
// }