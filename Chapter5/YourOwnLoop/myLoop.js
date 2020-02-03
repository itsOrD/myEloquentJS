// write a HOF loop that provides something like a for loop statement
// it takes a value
// a test function
// an update function
// and a body function.
// Each iteration it first runs the test function on the current loop value
// and stops if that returns false.
// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value and starts from the beginning.

// my solution
const myLoop = (val, testFxn, updateFxn, bodyFxn) => {
  if (!testFxn(val)) return;
  bodyFxn(val);
  myLoop(updateFxn(val), testFxn, updateFxn, bodyFxn);
};

myLoop(3, x => x > 0, x => x - 1, console.log);


// solution from https://eloquentjavascript.net/code/#5.2
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
