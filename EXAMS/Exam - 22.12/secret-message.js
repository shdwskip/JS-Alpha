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
const test = ['2{z10{xy}}'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const expression = gets();

class Node {
    constructor(value, index) {
        this.value = value;
        this.next = null;
        this.index = index;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(element, index) {
        const newNode = new Node(element, index);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
    }

    pop() {
        this.head = this.head.next;
        this.length -= 1;
    }

    peak() {
        return this.head.index;
    }
}
const openBracket = '{';
const closeBracket = '}';
const expressionStack = new Stack;
const arrResult = [];
let result = '';
let repeat;
let popped = false;
let opened = false;
for (let i = 0; i < expression.length; i += 1) {
    let count = 0;
    const current = expression[i];
    if (isFinite(current)) {
        if (expressionStack.head !== null && isFinite(expressionStack.head.value) && !opened) {
            expressionStack.head.value += current;
            expressionStack.head.index += 1;
        } else {
            expressionStack.push(current, i + 1);
            opened = false;
        }
    } else if (current === openBracket) {
        opened = true;
        expressionStack.head.index += 1;
        // expressionStack.push(current, i + 1);
        // popped = false;
    } else if (current === closeBracket) {
        let startIndex;
        let endIndex;
        if (expressionStack.length === 1) {
            startIndex = expressionStack.peak();
            endIndex = i - expressionStack.head.index;
            repeat = +expressionStack.head.value;
            let substr = result.substr(startIndex - 2, endIndex );
            substr = substr.replace(/[^a-z]+/g, '');
            while (count < repeat - 1) {
                result += substr;
                count += 1;
            }
        } else {
            startIndex = expressionStack.peak();
            endIndex = i;
            repeat = +expressionStack.head.value;
            expressionStack.pop();
            popped = true;
            const substr = expression.substring(startIndex, endIndex);
            while (count < repeat - 1) {
                result += substr;
                count += 1;
            }
        }
    } else {
        result += current;
    }
}
print(result);
// acdaafcdaafcdaafef

// if (expressionStack.head !== null) {
//     while (expressionStack.head.value === openBracket) {
//         expressionStack.pop();
//     }
//     let count = 1;
//     result = arrResult.join('');
//     while (count < +expressionStack.head.value) {
//         result += arrResult.join('');
//         count += 1;
//     }
// }
// print(arrResult.join(''));