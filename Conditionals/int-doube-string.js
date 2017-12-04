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

const variable = gets();
let value = gets();

switch (variable) {
    case 'integer': value = +value + 1; print(value); break;
    case 'real': value = +value + 1; print(value.toFixed(2)); break;
    case 'text': value += '*'; print(value); break;
    default: break;
}
