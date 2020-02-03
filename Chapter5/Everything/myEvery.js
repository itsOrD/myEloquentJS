// write a function that takes an array and a predicate function as parameters
// which returns true when the predicate returns true for every element in the array

// my solution:
const myEvery = (array, test) => {
	for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
};

console.log(myEvery([1, 3, 5], n => n < 10));
console.log(myEvery([2, 4, 16], n => n < 10));
console.log(myEvery([], n => n < 10));


// solution from https://eloquentjavascript.net/code/#5.3
function theirEvery(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

console.log(theirEvery([1, 3, 5], n => n < 10));
console.log(theirEvery([2, 4, 16], n => n < 10));
console.log(theirEvery([], n => n < 10));
