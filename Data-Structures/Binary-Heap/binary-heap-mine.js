class BinaryHeap {
    constructor(compareFunc) {
        this._heap = [null];
        this._compare = compareFunc;
    }

    get top() {
        return this._heap[1];
    }

    get length() {
        return this._heap.length - 1;
    }

    isEmpty() {
        return this._heap.length === 1;
    }

    insert(...elements) {
        if (elements.length === 1) {
            let currentIndex = this._heap.length;
            this._heap.push(elements[0]);
            while (currentIndex > 1 && this._compare(elements, this._heap[Math.trunc(currentIndex / 2)])) {
                this._heap[currentIndex] = this._heap[Math.trunc(currentIndex / 2)];
                currentIndex = Math.trunc(currentIndex / 2);
            }
            this._heap[currentIndex] = elements[0];
        } else {
            elements.forEach((el) => this.insert(el));
        }
    }

    removeTop() {
        const value = this._heap.pop();
        let index = 1;
        if (!this.isEmpty()) {
            while (index * 2 + 1 < this._heap.length) {
                const childIndex = this._compare(this._heap[index * 2], this._heap[index * 2 + 1]) ?
                    index * 2 : index * 2 + 1;
                if (this._compare(this._heap[childIndex], value)) {
                    this._heap[index] = this._heap[childIndex];
                    index = childIndex;
                } else {
                    break;
                }
            }

            if (index * 2 < this._heap.length) {
                const childIndex = index * 2;
                if (this._compare(this._heap[childIndex], value)) {
                    this._heap[index] = this._heap[childIndex];
                    index = childIndex;
                }
            }

            this._heap[index] = value;
        }
    }
}

const myHeap = new BinaryHeap((x, y) => x > y);
const minHeap = new BinaryHeap((x, y) => x < y);
myHeap.insert(20, 9, 50, 15, 34, 10);
minHeap.insert(20, 9, 50, 15, 34, 10);
console.log(myHeap);
console.log(myHeap.top);
console.log(myHeap.length);
console.log(myHeap.isEmpty());
myHeap.removeTop();
console.log(myHeap);
console.log('===========');
console.log(minHeap);
console.log(minHeap.top);
console.log(minHeap.length);
console.log(minHeap.isEmpty());
minHeap.removeTop();
console.log(minHeap);

module.exports = BinaryHeap;
