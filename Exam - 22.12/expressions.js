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
const test = ['123', '6'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
const countExp = (digits, expectedResult, index, currentNumber, currentProduct, currentSum, negative) => {
    if (index === digits.length) {
        currentProduct *= currentNumber;
        currentSum += negative ? -currentProduct : currentProduct;

        if (currentSum === expectedResult) {
            return 1;
        }

        return 0;
    }

    let result = 0;
    const nextSum = currentSum + currentProduct * currentNumber * (negative ? -1 : 1);
    result += countExp(digits, expectedResult, index + 1, digits[index], 1, nextSum, false);
    result += countExp(digits, expectedResult, index + 1, digits[index], 1, nextSum, true);

    const nextProduct = currentProduct * currentNumber;
    result += countExp(digits, expectedResult, index + 1, digits[index], nextProduct, currentSum, negative);

    if (currentNumber !== 0) {
        const nextNumber = currentNumber * 10 + digits[index];
        result += countExp(digits, expectedResult, index + 1, nextNumber, currentProduct, currentSum, negative);
    }

    return result;
};

const digits = gets().split('').map(Number);
const desiredNum = +gets();
const answer = countExp(digits, desiredNum, 1, digits[0], 1, 0, false);
print(answer);
