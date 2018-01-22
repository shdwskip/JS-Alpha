/* eslint-disable */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1122',
    'A1B12C11D2'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const digits = gets();
const cipher = gets();

const letterKey = {};
let current;
const result = [];

for (let i = 0; i < cipher.length; i += 1) {
    if (!isFinite(cipher[i])) {
        current = cipher[i];
        letterKey[current] = cipher[i + 1];
        i += 1;
    } else {
        letterKey[current] += cipher[i];
    }
}

const decrypt = (index, str) => {
    if (index === digits.length) {
        result.push(str);
        return;
    }

    for (const key in letterKey) {
        if (letterKey[key] === digits.substr(index, letterKey[key].length)) {
            str += key;
            decrypt(index + letterKey[key].length, str);
            str = str.substring(0, str.length - 1);
        }
    }
};

decrypt(0, '');
print(result.length);
if (result.length > 0) {
    result.sort();
    result.forEach((str) => print(str));
}