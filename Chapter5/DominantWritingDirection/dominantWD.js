//  TODO: come back to this problem and try wihout hints

// write a function that computes the dominant writing direction in a string of text
// each script object has a direction property that can be ltr, rtl, or ttb

// solution requires previously defined helper functions:
const dominantWD = (text) => {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
};

// previously defined by e-js:
const countBy = (items, groupName) => {
  let counts = [];
  for (let item of items) {
    let name = groupName(item) 
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
};

const characterScript = (code) => {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
};

console.log(dominantWD("Hello!"));
console.log(dominantWD("Hey, مساء الخير"));
