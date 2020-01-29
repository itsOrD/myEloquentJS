const testList = require('./testList.js');

// add a helper function prepend, which takes an element and a list and creates a new list
// that adds the element to the front of the input list

// my solution: 
const prepend = (element, list) => {
  const updatedList = {}
  updatedList.value = element;
  updatedList.rest = list;
  return updatedList;
};

console.log(prepend(42, testList ));
