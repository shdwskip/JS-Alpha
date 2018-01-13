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
const test = ['o2hs123o6G0ol090le42H'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const message = gets();
let result = '';
for (let i = message.length - 1; i >= 0; i -= 1) {
    if (!isFinite(message[i])) {
        result += message[i];
    }
}
print(result);

