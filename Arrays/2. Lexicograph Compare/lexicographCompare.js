function charArrs(arr) {
    let firstArr = arr[0],
        secondArr = arr[1],
        char,
        shorter;

    if (firstArr < secondArr) {
        shorter = firstArr;
    } else {
        shorter = secondArr;
    }

    for (char = 0, len = shorter.length; char < len; char += 1) {
        if (firstArr[char] < secondArr[char]) {
            return '<';
        } else if (firstArr[char] > secondArr[char]) {
            return '>';
        }
    }
    if (firstArr.length < secondArr.length) {
        return '<';
    } else if (secondArr.length < firstArr.length) {
        return '>';
    }
        return '=';
}
const arr = ['hello', 'helloz'];

charArrs(arr);
