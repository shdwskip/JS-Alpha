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

    set length(newLength) {
        this._length = newLength;
    }

    // get first() {
    //     return this[0][0];
    // }

    append2(...value) {
        if (value.length === 1) {
            const node = new ListNode(value[0]);

            if (this.head === null) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = this.tail.next;
            }
        } else {
            value.forEach((val) => this.append2(val));
        }
    }

    append(...value) {
        let node = new ListNode(value[0]);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            for (let i = 1; i < value.length; i += 1) {
                this.tail.next = new ListNode(value[i]);
                this.tail = this.tail.next;
            }
        } else {
            // let current = this.head;
            // while (current.next) {
            //     current = current.next;
            // }

            for (let i = 0; i < value.length; i += 1) {
                this.tail.next = new ListNode(value[i]);
                this.tail = this.tail.next;
            }
        }
        // for (let i = 0; i < args.length; i += 1) {
        //     this._head[this.length] = args[i];
        //     this._length += 1;
        // }
        this.length += value.length;
        return this;
    }

    // prepend(value) {
    //     const node = new ListNode(value);

    // }
}

const list = new LinkedList();
list.append(7).append(4);

console.dir(list);
console.log(list.length);