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
    '2',
    'we telerik academy are',
    'wearetelerikacademy',
    'we are telerik academy',
    'wearenottelerikacademy'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
let counter = 0;
let words;
let slogan;
while (counter < 2 * N) {
    if (counter % 2 === 0) {
        words = gets().split(' ');
    } else {
        let output = '';
        slogan = gets().split('');
        let current = '';
        for (let i = 0; i < slogan.length; i += 1) {
            current += slogan[i];
            if (words.indexOf(current) > -1) {
                output += current + ' ';
                current = '';
            }
        }
        output = output.trim();
        const result = output.split(' ');
        let countValidWords = 0;
        for (let i = 0; i < result.length; i += 1) {
            if (words.includes(result[i])) {
                countValidWords += 1;
            }
        }
        if (countValidWords === result.length) {
            if (result.join('').length === slogan.length) {
                print(output);
            } else {
                print('NOT VALID');
            }
        } else if (words.length !== output.split(' ').length) {
            print('NOT VALID');
        }
    }
    counter += 1;
}
