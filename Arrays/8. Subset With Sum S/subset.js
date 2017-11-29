/* Description

We are given an array of integers and a number S. Write a program to find if there exists
a subset of the elements of the array that has a sum S.

Sample tests

input array	                S	result
[2, 1, 2, 4, 3, 5, 2, 6]	14	yes

*/

/* FROM WIKIPEDIA:
initialize a list S (subsetArr) to contain one element 0.
 for each i from 1 to N do
   let T be a list consisting of xi + y, for all y in S
   let U be the union of T and S
   sort U
   make S empty
   let y be the smallest element of U
   add y to S
   for each element z of U in increasing order do
      //trim the list by eliminating numbers close to one another
      //and throw out elements greater than s
     if y + cs/N < z ≤ s, set y = z and add z to S
 if S contains a number between (1 − c)s and s, output yes, otherwise no */

function solve(arr, num) {
    const N = arr.length;
    let subsetArr = [0];
    for (let i = 0; i < N; i += 1) {
        const T = [];
        for (let j = 0; j < subsetArr.length; j += 1) {
            T[j] = arr[i] + subsetArr[j];
        }
        const U = T.concat(subsetArr);
        U.sort();
        subsetArr = [];
        subsetArr.push(U[0]);

        for (const z of U) {
            // trim the list by eliminating numbers close to one another
            // and throw out elements greater than s

            if (U[0] + (0.1*num/N) < z && z <= num) {
                U[0] = z;
                subsetArr.push(z);
            }
        }
    }
    for (const X of subsetArr) {
        if (X === num) {
            console.log('yes');
            break;
        }
    }
}

solve([20, 1, 7, 13, 5, 15, 32, 44], 14);
