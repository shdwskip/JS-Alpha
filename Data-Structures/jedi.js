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
const test = ['7', 'P4 P2 P3 M1 K2 P1 K1'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const N = +gets();
const allJedis = gets().split(' ');

const meditateOrder = [];

class Jedi {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class MeditateOrder {
    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }
    get len() {
        return this._length;
    }
    get name() {
        let current = this.head;
        let str = '';
        for (let i = 0; i < this._length; i += 1) {
            str += current.name + ' ';
            if (current.next) {
                current = current.next;
            }
        }

        str = str.trim();
        return str;
    }
    append(...values) {
        values.forEach((val) => {
            const jedi = new Jedi(val);
            if (this.head === null) {
                this.head = jedi;
                this.tail = jedi;
            } else {
                this.tail.next = jedi;
                this.tail = jedi;
            }
        });
        this._length += values.length;
        return this;
    }
}
const all = new MeditateOrder();


for (let i = 0; i < N; i += 1) {
    if (allJedis[i][0] === 'M') {
        all.append(allJedis[i]);
    }
}

for (let i = 0; i < N; i += 1) {
    if (allJedis[i][0] === 'K') {
        all.append(allJedis[i]);
    }
}

for (let i = 0; i < N; i += 1) {
    if (allJedis[i][0] === 'P') {
        all.append(allJedis[i]);
    }
}

print(all.name);
