/* Implement a program that prints all possible
    valid combinations of opening and closing brackets

n = 4           n = 6
()()            ()()()
(())            (()())
                (())()
                ()(())
                ((()))

n = 8

()()()()
(()()())
(()())()
()(()())
((()()))
(())()()
()(())()
((())())
()()(())
(()(()))
((()))()
()((()))
(((())))

 */

// const brackets = '()';
// // const combinations = brackets.repeat(n / 2);

// const getBrackets = (number) => {
//     const generateBrackets = (num) => {
//         if (num === 0 || num % 2 !== 0) {
//             // odd number of brackets
//             return;
//         }

//         const permutations = [];


//     };
// };


const generateBrackets = (number) => {
    let str = '';
    const openBracket = '(';
    const closeBracket = ')';

    for (let i = 0; i < number; i += 1) {
        str += openBracket;
    }
};
