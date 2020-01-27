// As a bonus assignment, modify your range function to take an optional third arg
// that indicates the 'step' value to use for building the arr
// If no step is given, the elements increment by one
// Make sure it also works with negative values!

// my solution:
const builtRange = (start, end, step = start < end ? 1 : -1) => {
  const output = [];
  if (step > 0) { 
    for (let i = start; i <= end; i+=step) {
      output.push(i);
    }
  }
  if (step < 0) {
    for (let i = start; i >= end; i+=step) {
      output.push(i);
    }
  }
  return output;
};

console.log(builtRange(1, 10, 2));
console.log(builtRange(5, 2, -1));

// answer from https://eloquentjavascript.net/code/#4.1
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
