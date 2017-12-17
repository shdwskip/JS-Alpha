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
const test = [123.45];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const number = gets().toString();
const len = number.length;
let reversed = '';

for (let i = len - 1; i >= 0; i -= 1) {
    reversed += number[i];
}
print(reversed);