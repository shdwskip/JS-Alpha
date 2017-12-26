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
    '1 4 2 6 3 4'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// razpishi variant sus Stack - reverse masiva

const size = +gets();
const arr = gets().split(' ').map(Number);

const jumps = Array.from({
    length: size,
}).fill(0);
let maxJumps = 0;
class Node {
    constructor(value, index) {
        this.value = value;
        this.next = null;
        this.index = index || null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = size;
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
    }

    pop() {
        this.head = this.head.next;
    }

    getPeakValue() {
        if (this.head === null) {
            return false;
        }
        return this.head.value;
    }

    getPeakIndex() {
        return this.head.index;
    }
}
const stackValues = new Stack();

for (let i = size - 1; i >= 0; i -= 1) {
    if (!stackValues.getPeakValue()) {
        jumps[i] = 0;
        stackValues.push(arr[i], i);
    } else {
        if (arr[i] < stackValues.getPeakValue()) {
            jumps[i] = jumps[stackValues.getPeakIndex()] + 1;
            stackValues.push(arr[i], i);
        } else {
            while (true) {
                if (!stackValues.getPeakValue()) {
                    jumps[i] = 0;
                    stackValues.push(arr[i], i);
                    break;
                } else if (arr[i] >= stackValues.getPeakValue()) {
                    stackValues.pop();
                } else {
                    jumps[i] = 1 + jumps[stackValues.getPeakIndex()];
                    stackValues.push(arr[i], i);
                    break;
                }
            }
        }
    }
    if (jumps[i] > maxJumps) {
        maxJumps = jumps[i];
    }
}

print(maxJumps);
print(jumps.join(' '));