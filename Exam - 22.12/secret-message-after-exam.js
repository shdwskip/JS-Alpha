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
const test = ['a{abc{d}e}'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const message = gets();

class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(element) {
        const newNode = new Node(element);
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
        if (this.head !== null) {
            return this.head.value;
        }
        return false;
    }
}

const lettersStack = new Stack();
const digitsStack = new Stack();
const bracketsStack = new Stack();
let result = '';
let temp = '';
let holder = '';
let count = 0;
let lastEl;

// 2{a{b}2{c}d}

for (let i = 0; i < message.length; i += 1) {
    let repeated = false;
    const currentEl = message[i];
    if (!isFinite(currentEl) && currentEl !== '{' && currentEl !== '}') {
        if (bracketsStack.length === 0) {
            result += currentEl;
        } else if (lastEl === 'letter' || lastEl === '}') {
            lettersStack.head.value += currentEl;
            lastEl = 'letter';
        } else {
            lettersStack.push(currentEl);
            lastEl = 'letter';
        }
    } else if (isFinite(currentEl)) {
        if (lastEl === 'digit') {
            digitsStack.head.value += currentEl;
            lastEl = 'digit';
        } else {
            digitsStack.push(currentEl);
            lastEl = 'digit';
        }
    } else {
        if (currentEl === '{') {
            if (lastEl === 'letter') {
                digitsStack.push('1');
            }
            bracketsStack.push(currentEl);
            lastEl = '{';
        } else {
            // let repeat = 1;
            // if (digitsStack.length > 0) {
            // }
            const repeat = +digitsStack.peak();

            holder = lettersStack.peak();
            if (digitsStack.length > 0) {
                digitsStack.pop();
            }
            if (lettersStack.length > 0) {
                lettersStack.pop();
            }
            bracketsStack.pop();
            lastEl = '}';
            if (repeat > 0) {
                repeated = true;
            }

            while (count < repeat) {
                temp += holder;
                count += 1;
            }

            if (!repeated) {
                temp = holder;
            }
            count = 0;
            if (lettersStack.length > 0) {
                lettersStack.head.value += temp;
            } else {
                result += temp;
            }
            temp = '';
        }
    }
}
print(result);
