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
    'ADD -14483',
    'ADD 1',
    'ADD 2',
    'ADD 3',
    'ADD -14483',
    'ADD 8637',
    'FIND',
    'EXIT'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

class Heap {
    constructor(compareFunc) {
        this.values = [null];
        this.compareFunc = compareFunc || ((x, y) => x < y);
    }

    get top() {
        return this.values[1];
    }

    get count() {
        return this.values.length - 1;
    }

    get isEmpty() {
        return this.count === 0;
    }

    add(value) {
        let index = this.values.length;
        this.values.push(value);

        while (index > 1 && this.compareFunc(value, this.values[index >> 1])) {
            this.values[index] = this.values[index >> 1];
            index >>= 1;
        }

        this.values[index] = value;
    }

    removeTop() {
        const value = this.values[this.values.length - 1];
        this.values.pop();

        if (!this.isEmpty) {
            this._heapifyDown(1, value);
        }
    }

    _heapifyDown(index, value) {
        while (index * 2 + 1 < this.values.length) {
            const isFirstChildBetter =
                this.compareFunc(this.values[index * 2], this.values[index * 2 + 1]);
            const smallerChildIndex = isFirstChildBetter ? index * 2 : index * 2 + 1;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            } else {
                break;
            }
        }

        if (index * 2 < this.values.length) {
            const smallerChildIndex = index * 2;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            }
        }

        this.values[index] = value;
    }
}

const getMedian = (minHeap, maxHeap) => {
    if (minHeap.count === maxHeap.count) {
        return (minHeap.top + maxHeap.top) / 2;
    } else if (minHeap.count < maxHeap.count) {
        return maxHeap.top;
    }
    return minHeap.top;
};

const minHeap = new Heap((x, y) => x < y);
const maxHeap = new Heap((x, y) => x > y);
let inputLine;
// const inputData = [];
let currentEl;
// while ((inputLine = gets()) !== 'EXIT') {
//     if (inputLine.startsWith('A')) {
//         inputData.push(+inputLine.split(' ')[1]);
//     } else {
//         inputData.push('F');
//     }
// }
let counter = 0;
// minHeap.add(inputData[0]);
while ((inputLine = gets()) !== 'EXIT') {
    if (counter === 0) {
        minHeap.add(+inputLine.split(' ')[1]);
        counter += 1;
        continue;
    }
    const currentMedian = getMedian(minHeap, maxHeap);
    if (inputLine.startsWith('A')) {
        currentEl = +inputLine.split(' ')[1];
    } else {
        print(currentMedian);
        continue;
    }

    // const currentEl = inputData[i];
    if (currentMedian <= currentEl) {
        minHeap.add(currentEl);
    } else {
        maxHeap.add(currentEl);
    }

    if (minHeap.count + 2 === maxHeap.count) {
        minHeap.add(maxHeap.top);
        maxHeap.removeTop();
    } else if (maxHeap.count + 2 === minHeap.count) {
        maxHeap.add(minHeap.top);
        minHeap.removeTop();
    }
}