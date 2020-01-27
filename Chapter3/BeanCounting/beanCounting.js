// write a function 'countBs' that takes a string as its only argument and returns
// a number that indicates how many uppercase "B" characters there are in the string

// my initial solution:
const countBs = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  return count;
};

console.log(countBs('Bees Bees'));


// Next, write a function called countChar that behaves like countBs, except it takes a
// second argument that indicates the character that is to be counted

// my initial solution:
const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};

console.log(countChar('Bees Bees', 'e'))


// rewrite countBs to make use of this new function
// my initial solution:
const newCountBs = (str) => {
  return countChar(str, 'B');
};

console.log(newCountBs('Bees Bees'));

// - - - 

// answer from eloquentJavascript:
function theirCountChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ch) {
      counted += 1;
    }
  }
  return counted;
}

function theirCountBs(string) {
  return theirCountChar(string, "B");
}

console.log(theirCountBs("BBC"));
console.log(theirCountChar("kakkerlak", "k"));
