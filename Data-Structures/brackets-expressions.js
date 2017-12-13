// https://github.com/Minkov/dmoj-tasks/blob/master/intermediate/01linearstructures/04bracketexpressions/README.md

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
const test = ['5 * (123 * (1 + 3) + ((4 - 3) / 6))'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const expression = gets();

class Stack {
    constructor() {
        this._arr = [];
    }

    push(element) {
        this._arr.push(element);
    }

    pop() {
        return this._arr.pop();
    }
}

const openBracket = '(';
const closeBracket = ')';
const bracketsStack = new Stack();

for (let i = 0; i < expression.length; i += 1) {
    const current = expression[i];
    if (current === openBracket) {
        bracketsStack.push(i);
    } else if (current === closeBracket) {
        const startIndx = bracketsStack.pop();
        print(expression.slice(startIndx, i + 1));
    }
}
