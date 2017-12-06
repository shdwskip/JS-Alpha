class ListNode {
    constructor(value, next = null) {
        this.next = next;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
        // this._first = null;
        // this._last = null;
    }

    get length() {
        return this._length;
    }

    // get first() {
    //     return this[0][0];
    // }

    append(...value) {
        let node = new ListNode(value[0]);
        if (this._head === null) {
            this._head = node;
            for (let i = 1; i < value.length; i += 1) {
                node.next = new ListNode(value[i]);
                node = node.next;
            }
        } else {
            let current = this._head;
            while (current.next) {
                current = current.next;
            }

            for (let i = 0; i < value.length; i += 1) {
                current.next = new ListNode(value[i]);
                current = current.next;
            }
        }
        // for (let i = 0; i < args.length; i += 1) {
        //     this._head[this.length] = args[i];
        //     this._length += 1;
        // }
        this._length += value.length;
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
