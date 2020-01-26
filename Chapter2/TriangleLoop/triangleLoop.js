// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// my first attempt:
const octathorpeTriangle = () => {
  let output = '#';
  for (let i=0; i<7; i++){
    console.log(output);
    output = output + '#';
  }
};

octathorpeTriangle();


// solution from eloquentjavascript.net
for (let line = "#"; line.length < 8; line+= '#')
  console.log(line)
