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
const test = ['hoboobbo422222Aaao'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */


const incomingMsg = gets();
const output = [];

for (let i = 0; i < incomingMsg.length; i += 1) {
    const current = incomingMsg[i];
    const next = incomingMsg[i + 1];

    if (current === next) {
       continue;
    }

    output.push(current);
}

print(output.join(''));