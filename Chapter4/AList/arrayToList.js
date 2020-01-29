// Write a function arrayToList that builds up a list structure like the one shown [pg 79]
// when given [1, 2, 3] as arg

// showing my work:

// const arrToList = () => {
//   const list = {};
//   list.value = 1;
//   list.rest = {};
//   list.rest.value = 2;
//   list.rest.rest = {};
//   list.rest.rest.value = 3;
//   list.rest.rest.rest = {};
//   return list;
// };

// const arrayToList = (arr) => {
//   const list = {};
//   let depth = list;
// 	for (let i = 0; i < arr.length - 1; i++) {
//     depth.value = arr[i];
//     depth.rest = {};
//     depth = depth + '.' + 'rest';
//     console.log(depth)
//   }
//   return list;
// };

const arrayToList2 = (arr) => {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { 
      value: arr[i],
      rest: list
    }
  }
  return list;
}

console.log(arrayToList2([1, 2, 3]));
