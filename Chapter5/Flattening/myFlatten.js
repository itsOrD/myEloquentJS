// use the reduce method in combination with the concat method to "flatten" an array of arrays into 
// a single array that has all the elements of the original arrays.

// my solution:
const myFlatten = (arr) => {
	return arr.reduce((answerArr, current) => {
    return answerArr.concat(current);
  }, [])
};

console.log(myFlatten([[1, 2, 3], [4, 5], [6]]));

// solution from https://eloquentjavascript.net/code/#5.1
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
