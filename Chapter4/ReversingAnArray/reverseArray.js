// Write a function that takes an array as argument and produces a NEW array that has
// the same elements in the inverse order: 

// my solution: 
const reverseArray = (arr) => {
  const output = [];
  // interesting to note that this style of loop does type coercion:
  for (let element in arr) {
    typeof arr[element] === "number" ? output.push(Number(arr[element])) : output.push(arr[element]);
  }
  return output;
};

console.log(reverseArray([1,2,3]));
console.log(reverseArray(['hi', 2, 'dogs']));


// answer from https://eloquentjavascript.net/code/#4.2:
function theirReverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

console.log(theirReverseArray([4,5,6]));
console.log(theirReverseArray(['yo', 21, 'cats']));
