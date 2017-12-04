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
const test = ['-3'];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const digit = gets();

if (digit >= 0 && digit <= 9) {
   switch (digit) {
       case '0': print('zero'); break;
       case '1': print('one'); break;
       case '2': print('two'); break;
       case '3': print('three'); break;
       case '4': print('four'); break;
       case '5': print('five'); break;
       case '6': print('six'); break;
       case '7': print('seven'); break;
       case '8': print('eight'); break;
       case '9': print('nine'); break;

       default: print('not a digit'); break;
   }
} else {
   print('not a digit');
}

