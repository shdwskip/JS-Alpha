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
    '7 1 1 2 3 1'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const calculate = (numbers, days) => {
    let left;
    let right;
    let holdValue;
    let notEatable = 0;
    const checkResult = [];
    for (let i = 0; i < numbers.length - 1; i += 1) {
        left = numbers[i];
        right = numbers[i + 1];
        if (left === true && right === true) {
            continue;
        }
        if (left === true) {
            if (holdValue < right) {
                holdValue = right;
                numbers[i + 1] = true;
            } else {
                continue;
            }
        } else if (right === true) {
            let j = i;
            while (numbers[j + 1] === true) {
                j += 1;
            }
            right = numbers[j + 1];
            if (left < right) {
                holdValue = right;
                numbers[j + 1] = true;
            }
        } else if (left < right) {
            holdValue = right;
            numbers[i + 1] = true;
        } else {
            notEatable += 2;
        }
    }
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] !== true) {
            checkResult.push(numbers[i]);
        }
    }
    days += 1;
    if (notEatable === checkResult.length) {
        print(days);
        return;
    }
    calculate(checkResult, days);
};

const N = +gets();
const sequence = gets().split(' ').map(Number);
calculate(sequence, 0);
