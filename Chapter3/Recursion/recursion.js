/* define a recursive function 'isEven' corresponding to this description
The function should accept a single parameter (a positive, whole number)
and return a Boolean.

use these rules: 
	* zero is even
	* one is odd
	* for any other number N, its evenness is the same as N - 2
*/

// my solution:
const isEven = (N) => {
  if (N === 0) return true;
  if (N === 1) return false;
  if (N < 0) return isEven(-N);
  else return isEven(N - 2);
}

// Test it on 50 & 75.  See how it behaves on -1.  Why?  Can you think of a way to fix this?

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); // <- call stack error before

/*
eloquentjs solution:
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
*/
