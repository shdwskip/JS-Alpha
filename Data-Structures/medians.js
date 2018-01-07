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
    'ADD 5',
    'ADD 1',
    'FIND',
    'ADD 2',
    'FIND',
    'ADD 3',
    'ADD 1',
    'FIND',
    'ADD 3',
    'FIND',
    'EXIT',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const BinaryHeap = require('../Data-Structures/Binary-Heap/binary-heap-mine');

class MedianHeap {
    constructor() {
        this._minHeap = new BinaryHeap((x, y) => x < y);
        this._maxHeap = new BinaryHeap((x, y) => x > y);
    }

    isEmpty() {
        return this._minHeap.isEmpty() && this._maxHeap.isEmpty();
    }

    insert(...elements) {
        if (elements.length === 1) {
            if (this.isEmpty()) {
                this._minHeap.insert(elements[0]);
            } else {
                if (elements[0] <= this.getMedian()) {
                    this._maxHeap.insert(elements[0]);
                } else {
                    this._minHeap.insert(elements[0]);
                }
            }
        } else {
            elements.forEach((value) => this.insert(value));
        }
        this._balance();
    }

    getMedian() {
        if (this._minHeap.length === this._maxHeap.length) {
            return (this._minHeap.top + this._maxHeap.top) / 2;
        } else if (this._minHeap.length < this._maxHeap.length) {
            return this._maxHeap.top;
        }
        return this._minHeap.top;
    }

    _balance() {
        // if min.length + 2 === max.length
        // or max.length + 2 === min.length => we need to re-balance

        if (Math.abs(this._minHeap.length - this._maxHeap.length) > 1) {
            if (this._minHeap.length < this._maxHeap.length) {
                this._minHeap.insert(this._maxHeap.top);
                this._maxHeap.removeTop();
            } else {
                this._maxHeap.insert(this._minHeap.top);
                this._minHeap.removeTop();
            }
        }
    }
}

let inputLine;
let currentEl;

const medHeap = new MedianHeap();
const medians = [];

while ((inputLine = gets()) !== 'EXIT') {
    if (inputLine.startsWith('A')) {
        currentEl = +inputLine.split(' ')[1];
        medHeap.insert(currentEl);
    } else {
        medians.push(medHeap.getMedian());
    }
}

medians.forEach((med) => print(med));
