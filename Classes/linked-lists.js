class ListNode {
    constructor(value, next = null) {
        this.next = next;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        // this._first = null;
        // this._last = null;
    }

    get length() {
        return this._length;
    }
    get first() {
        return this.head.value;
    }
    get last() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        return current.value;
    }

    set length(newLength) {
        this._length = newLength;
    }

    // DONCHO'S SOLUTION FOR APPEND
    append(...value) {
        if (value.length === 1) {
            const node = new ListNode(value[0]);

            if (this.head === null) {
                this.head = node;
                this.tail = node;
                this.length += 1;
            } else {
                this.tail.next = node;
                this.tail = this.tail.next;
                this.length += 1;
            }
        } else {
            value.forEach((val) => this.append2(val));
        }
        return this;
    }

    // MINE SOLUTION FOR APPEND
    append2(...value) {
        const node = new ListNode(value[0]);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            for (let i = 1; i < value.length; i += 1) {
                this.tail.next = new ListNode(value[i]);
                this.tail = this.tail.next;
            }
        } else {
            for (let i = 0; i < value.length; i += 1) {
                this.tail.next = new ListNode(value[i]);
                this.tail = this.tail.next;
            }
        }
        this.length += value.length;
        return this;
    }

    prepend(...value) {
        if (value.length === 1) {
            const node = new ListNode(value[0]);
            if (this.head === null) {
                this.head = node;
                this.tail = node;
                this.length += 1;
            } else {
                node.next = this.head;
                this.head = node;
                this.length += 1;
            }
        } else {
            for (let i = value.length - 1; i >= 0; i -= 1) {
                this.prepend(value[i]);
            }
        }
        return this;
    }

    insert(index, ...value) {
        if (!this.head) {
            this.head = new ListNode(value[0]);
        } else {
            let parent = null;
            let current = this.head;
            let counter = 0;

            while (counter < index) {
                parent = current;
                current = current.next;
                counter += 1;
            }

            for (let i = value.length - 1; i >= 0; i -= 1) {
                if (current) {
                    const child = new ListNode(current.value);
                    child.next = current.next;
                    current.value = value[i];
                    current.next = child;
                    this.length += 1;
                } else {
                    parent.next = new ListNode(value[i]);
                    this.length += 1;
                }
            }
        }
        return this;
    }
}

const list = new LinkedList();
list.append(1, 4, 5).insert(1, 2, 3);

console.dir(list);
// console.log(list.length);
// console.log(list.first);
console.log(list.last);