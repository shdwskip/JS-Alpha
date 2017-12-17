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
const test = ['8 3 6'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


const arr = gets().split(' ').map(Number);

if (!Array.prototype.GetMax) {
    Array.prototype.GetMax = (number1, number2) => {
        return number1 <= number2 ? number2 : number1;
    }
}


const first = arr[0];
const bigger = arr.GetMax(first, arr[1]);
const max = arr.GetMax(bigger, arr[2]);
print(max);