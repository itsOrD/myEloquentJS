const range = require('./rangeFunction.js');

// write a sum function that takes an array of numbers and returns the sum of these numbers

// my solution:
const sum = (arr) => {
  let total = 0;

  // 'in' is last value exclusive
  // for (let num in arr) total += Number(num);

  // 'of' is last value inclusive
  for (let num of arr) total += Number(num);
  return total;
};

console.log(sum([1,2,3]));

// - - - 

// test with range(1, 10) and see if it returns 55:
console.log(sum(range(1,10)));
