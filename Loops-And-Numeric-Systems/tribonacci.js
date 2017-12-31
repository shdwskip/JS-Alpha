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
    '3',
    '4',
    '10'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const previousThree = [];
for (let i = 0; i < 3; i += 1) {
    previousThree[i] = gets();
}

const desiredNumber = +gets();
let i = 4;
let sum;
if (desiredNumber === 1) {
    print(previousThree[0]);
} else if (desiredNumber === 2) {
    print(previousThree[1]);
} else if (desiredNumber === 3) {
    print(previousThree[2]);
} else {
    while (i <= desiredNumber) {
        // sum = previousThree.reduce((a, b) => a + b, 0);
        sum = add(previousThree[0], previousThree[1]);
        sum = add(sum, previousThree[2]);
        previousThree.push(sum);
        previousThree.splice(0, 1);
        i += 1;
    }
    print(sum);
}
/* eslint-disable */
function add(num1, num2) {
    num1 = num1.split('');
    num2 = num2.split('');

    num1 = num1.map(function (num) {
        return parseInt(num, 10);
    });

    num2 = num2.map(function (num) {
        return parseInt(num, 10);
    });

    if (num2.length > num1.length) {
        return _add(num2, num1);
    } else {
        return _add(num1, num2)
    }
}

function _add(num1, num2) {
    var num1_idx = num1.length - 1;
    var num2_idx = num2.length - 1;
    var remainder = 0;

    for (; num1_idx > -1; num1_idx--, num2_idx--) {
        var sum = num1[num1_idx] + remainder;

        if (num2_idx > -1) {
            sum += num2[num2_idx];
        }

        if (sum <= 9 || num1_idx === 0) {
            remainder = 0;
            num1[num1_idx] = sum;
        } else if (sum >= 10) {
            remainder = 1;
            num1[num1_idx] = sum - 10;
        }

        // console.log(remainder);
    }

    return num1.join('');
}