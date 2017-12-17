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
const test = ['8', '28 6 21 6 -7856 73 73 -56', '73'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const arr = gets().split(' ').map(Number);
const X = +gets();

if (!Array.prototype.appear) {
    Array.prototype.appear = (arr, number) => {
        let totalAppearance = 0;
        for (let i = 0; i < arr.length; i += 1) {
            const current = arr[i];
            if (current === number) {
                totalAppearance += 1;
            }
        }
        return totalAppearance;
    }
}

print(arr.appear(arr, X));