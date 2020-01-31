// Write a function 'deepEqual' that takes two values and returns true only if they are the same value
// or are objects with the same properties, where the value of the properties are equal when compared with a recursive call to deepEqual

// my solution works only in certain cases:
// const deepEqual = (a, b) => {
//   let sameness = false;
// 	if (typeof a === 'object' && typeof b === 'object') {
//     if (a == null && b == null) {
//       sameness = true;
//       return sameness;
//     }
//     let aVal = Object.keys(a);
//     let bVal = Object.keys(b);
//     if (aVal.length === bVal.length) {
//       for (let i = 0; i < aVal.length; i++) {
//         deepEqual(aVal[i], bVal[i]);
//       }
//     }
//   }
//   if (a === b) {
//     sameness = true;
//     return sameness;
//   }
//   return sameness;
// }

// console.log(deepEqual(1, 2));
// console.log(deepEqual({a: 1}, {a: 1}));


// full correct solution from: https://eloquentjavascript.net/code/#4.4
function theirDeepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !theirDeepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(theirDeepEqual(obj, obj));
// → true
console.log(theirDeepEqual(obj, {here: 1, object: 2}));
// → false
console.log(theirDeepEqual(obj, {here: {is: "an"}, object: 2}));
// → true ?!
