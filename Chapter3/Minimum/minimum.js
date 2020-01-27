// write a function that takes two arguments and returns their minimum

// my naive solution
const min = (a, b) => {
  if (a > b) return console.log(b);
  return console.log(b);
};

min(10, 4)
min(0, -10)


// answer from eloquentjs
function mini(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(mini(0, -10))
console.log(mini(-10, 0))
