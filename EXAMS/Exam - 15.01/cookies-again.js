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
    '7',
    '8 4 7 5 6 10 9'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
/* globals Set */
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.tail = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length > 0 ? false : true;
    }
    enQueue(element) {
        const newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    deQueue() {
        if (this.length > 0) {
            this.head = this.head.next;
        } else {
            return null;
        }
        this.length -= 1;
        return this;
    }
}


const N = +gets();
const sequence = gets().split(' ').map(Number);
const getResult = (arr, days) => {
    const queue = [];
    // const cookieQueue = new Queue();
    const tempArr = [arr[0]];
    const addedToQueue = new Set();
    const addedToArr = new Set();
    addedToArr.add(arr[0]);
    for (let i = 0; i < arr.length - 1; i += 1) {
        const left = arr[i];
        const right = arr[i + 1];
        if (left < right) {
            queue.push(right);
            addedToQueue.add(right);
            if (!addedToQueue.has(left) && !addedToArr.has(left)) {
                tempArr.push(left);
                addedToArr.add(left);
            }
        } else if (i > 1) {
            tempArr.push(right);
            addedToArr.add(right);
        }
    }
    if (queue.length === 0) {
        print(days);
        return days;
    }
    days += 1;
    getResult(tempArr, days);
};
getResult(sequence, 0);
