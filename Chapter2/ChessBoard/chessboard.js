// Write a program that creates a string that represents an 8x8 grid, using new-line characters
// to separate lines.  At each position of the grid there is either a space or a # character.
// The characters should form a chessboard.

// When you have a program that generates this pattern, define a binding size = 8 
// and change the program so that it works for any size, outputting a grid of given width x height

// my naive solution:
const fakeChessBoard = (w, h) => {
  for (let j = 1; j < h+1; j++) {
  let output = "";
    for (let i = 1; i < w+1; i++) {
      if (j % 2 === 0 && i % 2 === 0) {
        output += " ";
      } 
      if (j % 2 === 0 && i % 2 !== 0) {
        output+= "#"
      }
      if (j % 2 !== 0 && i % 2 === 0) {
        output += "#"
      }
      if (j % 2 !== 0 && i % 2 !== 0) {
        output += " "
      }
    }
    console.log(output);
  }
};

fakeChessBoard(2, 4);


// answer from eloquentjavascript.net/code: 
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x+y) % 2 === 0) {
      board += " ";
    } else {
      board+= "#";
    }
  }
  board += "\n";
}

console.log(board);
