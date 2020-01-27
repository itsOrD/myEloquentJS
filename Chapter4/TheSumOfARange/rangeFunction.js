// Write a range function that takes two arguments, 'start' and 'end'
// and returns an array containing all the numbers from start up to (and including) end

// my solution:
const range = (start, end) => {
  const output = [];
  for (let i = start; i <= end; i++) {
    output.push(i);
  }
  return output;
};

console.log(range(1, 10));

module.exports = range;