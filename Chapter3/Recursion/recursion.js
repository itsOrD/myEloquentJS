/* define a recursive function 'isEven' corresponding to this description
The function should accept a single parameter (a positive, whole number)
and return a Boolean.

use these rules: 
	* zero is even
	* one is odd
	* for any other number N, its evenness is the same as N - 2
*/

const isEven = (N) => {
  if (N === 0) return true;
  if (N === 1) return false;
  else return isEven(N - 2);
}

// Test it on 50 & 75.  See how it behaves on -1.  Why?  Can you think of a way to fix this?

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); // <- call stack error before
