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
const test = ['254'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let number = +gets();

const divisor = 16;

if (number === 0) {
    print(0);
} else {
    let hexNumber = '';
    while (number > 0) {
        const checkRemainder = number % divisor;
        let remainder = '';
        switch (checkRemainder) {
            case 10: remainder = 'A'; break;
            case 11: remainder = 'B'; break;
            case 12: remainder = 'C'; break;
            case 13: remainder = 'D'; break;
            case 14: remainder = 'E'; break;
            case 15: remainder = 'F'; break;
            default: remainder = checkRemainder.toString(); break;
        }

        hexNumber = remainder + hexNumber;
        number = Math.floor(number / divisor);
    }
    print(hexNumber);
}
