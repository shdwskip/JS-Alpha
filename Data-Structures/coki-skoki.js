// https://github.com/Minkov/dmoj-tasks/blob/master/intermediate/01linearstructures/05cokiskoki/README.md

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
    '5',
    '1 1 1 1 1'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const buildings = gets().split(' ').map(Number);

// let totalJumps = 0;
// let maxJumps = 0;
// const jumpsArr = [];

// for (let i = 0; i < N; i += 1) {
//     let current = buildings[i];
//     for (let j = i + 1; j < N; j += 1) {
//         if (current >= buildings[j]) {
//             continue;
//         }
//         totalJumps += 1;
//         current = buildings[j];
//     }
//     jumpsArr.push(totalJumps);
//     if (maxJumps < totalJumps) {
//         maxJumps = totalJumps;
//     }
//     totalJumps = 0;
// }
// print(maxJumps);
// print(jumpsArr.join(' '));
const size = +gets();
const arr = gets().split(' ').map(Number);
let maxJumps = 0;

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
        this.result = 0;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = size;
    }

    append(...el) {
        el.forEach((value) => {
            const newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
                // if (this.tail.prev.value < this.tail.value) {
                let current = this.tail;
                const holder = current.value;
                while (current.prev && current.prev.value < holder) {
                    current.prev.result += 1;
                    current = current.prev;
                    if (current.result > maxJumps) {
                        maxJumps = current.result;
                    }
                }
                this.tail = newNode;

                // } else {
            }
        });
    }
}

const list = new LinkedList();
list.append(...arr);

let line = '';
for (let i = 0; i < size; i += 1) {
    line += list.head.result + ' ';
    list.head = list.head.next;
}

// line = line.trim();
print(maxJumps);
print(line);
