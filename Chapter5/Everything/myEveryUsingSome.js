// write your own 'every' function, but use the 'some' method

// solution:
const myEveryUsingSome = (array, test) => {
  return !array.some(element => !test(element))
};

console.log(myEveryUsingSome([1, 3, 5], n => n < 10));
console.log(myEveryUsingSome([2, 4, 16], n => n < 10));
console.log(myEveryUsingSome([], n => n < 10));

// this logic is based on "De Morgan's laws"
  // a && b === !(!a || !b)
  // generalized to arrays, where all elements in the array match IF
  // there is no element in the array that does NOT match
// ...circular logic in programming ftw
