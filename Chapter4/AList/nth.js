const listToArray = require('./listToArray.js');
const testList = require('./testList.js');
const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What should be searched for in testList? ', (input) => {
  searchLog(input);
  rl.close();
});

// write a function which takes a list and a number and returns the element at the given position
// (with zero referring to the first element) or undefined when there is no such element

// my solution:
const nth = (list, searchParam) => {
  let searchP;
  typeof num === 'number' ? searchP = Number(searchParam) : searchP = searchParam;
  let listArr = listToArray(list);
  for (let element in listArr) {
    if (listArr[element] === searchP) return element;
  }
};

const searchLog = (q) => {
  let output = nth(testList, q)
  console.log(`nth of ${q}: ${output}`);
};
