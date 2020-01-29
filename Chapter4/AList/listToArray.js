const testList = require('./testList.js');

// write a listToArray function that produces an array from a list: 

// my solution:
const listToArray = (list) => {
  let arr = [];
  // TODO: practice using for-loops in this manner
  for (let node = list; node; node = node.rest) {
    (node.value) ? arr.push(node.value) : '';
  }
  return arr;
};

// const listy = {
// 	value: 'dog',
// 	rest: {
// 		value: 'corbin',
// 		rest: {
// 			value: 'much wow',
// 			rest: {}
// 		}
// 	}
// }

// console.log('listToArray: ', listToArray(listy));
console.log('listToArray: ', listToArray(testList));

module.exports = listToArray;

// answer from https://eloquentjavascript.net/code/#4.3
