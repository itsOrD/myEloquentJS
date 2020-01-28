// modify the array given as an arg by reversing its elements

// my solution:
const reverseArrayInPlace = (arr) => {
  let loopCount = arr.length;
  let counter = 0;
  while (counter < loopCount - 1) {
    let tmp = arr[0];
    arr.shift(arr[0]);
    arr.push(tmp);
    counter++;
  }
  return arr;
};

console.log(reverseArrayInPlace([1,2,3]));


// solution from https://eloquentjavascript.net/code/#4.2:
function theirReverseArrayInPlace(array) {
  console.log('original: ', array);
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    console.log('current i: ', i);
    let old = array[i];
    console.log('old: ', old);
    array[i] = array[array.length - 1 - i];
    console.log('array[array.length - 1 - i]: ', array[array.length - 1 - i]);
    array[array.length - 1 - i] = old;
    console.log(`array after ${i+1} changes: ${array}`);
  }
  console.log('after reverse: ', array);
  return array;
}

console.log(theirReverseArrayInPlace([4,5,6,7]));
