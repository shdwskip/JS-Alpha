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
const test = ['12', '11 5 10 6 9 10'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const swappingNumbers = gets().split(' ').map(Number);
const numbers = Array.from({
    length: N + 1,
});

/* global Symbol */
class Node {
    constructor(value, prev) {
        this.value = value;
        this.next = null;
        this.prev = prev || null;

        if (prev) {
            prev.next = this;
        }
    }

    static detach(node) {
        if (node.prev) {
            node.prev.next = null;
        }
        if (node.next) {
            node.next.prev = null;
        }
        node.next = null;
        node.prev = null;
    }

    static attach(left, right) {
        if (left === right) {
            return;
        }
        left.next = right;
        right.prev = left;
    }

    * [Symbol.iterator]() {
        let current = this;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}

for (let i = 1; i <= N; i += 1) {
    const node = new Node(i, numbers[i - 1]);
    numbers[i] = node;
}

let leftEnd = numbers[1];
let rightEnd = numbers[N];

swappingNumbers.forEach((number) => {
    const numberToSwapAround = numbers[number];
    const newLeftEnd = numberToSwapAround.next;
    const newRightEnd = numberToSwapAround.prev;

    Node.detach(numberToSwapAround);
    Node.attach(numberToSwapAround, leftEnd);
    Node.attach(rightEnd, numberToSwapAround);

    leftEnd = newLeftEnd || numberToSwapAround;
    rightEnd = newRightEnd || numberToSwapAround;
});

print([...leftEnd].join(' '));
