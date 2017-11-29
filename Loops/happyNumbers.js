/*
A number is happy when:
It has 4 digits
Leading zeros are invalid
The sum of the first and second digit is equal to the sum of the third and the forth digit
Example:
1230, 3333, 1322, 9164 are happy numbers
 */

let happyNumber = '';

for (let firstDigit = 1; firstDigit <= 9; firstDigit += 1) {
    for (let secondDigit = 0; secondDigit <= 9; secondDigit += 1) {
        for (let thirdDigit = 0; thirdDigit <= 9; thirdDigit += 1) {
            const fourthDigit = firstDigit + secondDigit - thirdDigit;
            if (fourthDigit >= 0 && fourthDigit <= 9) {
                happyNumber = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;
                console.log(happyNumber);
            } else {
                break;
            }
        }
    }
}
