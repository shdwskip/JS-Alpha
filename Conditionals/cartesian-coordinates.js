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
const test = ['-3000', '-4'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const X = +gets();
const Y = +gets();

if (X === 0 && Y === 0) {
    print(0);
} else if (X > 0 && Y > 0) {
    print(1);
} else if (X < 0 && Y > 0) {
    print(2);
} else if (X < 0 && Y < 0) {
    print(3);
} else if (X > 0 && Y < 0) {
    print(4);
} else if (X === 0 && Y !== 0) {
    print(5);
} else {
    print(6);
}
