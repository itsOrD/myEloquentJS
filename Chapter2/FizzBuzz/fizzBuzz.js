/* 
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by
both 3 && 5 (and still print "Fizz" or "Buzz" for numbers divisible by only 3 or 5) 
*/

// my first attempt:
const fizzBuzz = () => {
  let tracker = 100;
  let curNum = 1;
  while (tracker > 0) {
    if (curNum % 3 === 0 && curNum % 5 === 0) {
      console.log("FizzBuzz");
    } else if (curNum % 3 === 0) {
      console.log("Fizz");
    } else if (curNum % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(curNum)
    }
    curNum++;
    tracker--;
  }
};

fizzBuzz();


// solution from eloquentjavascript.net/code
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz"
  if (n % 5 == 0) output +="Buzz"
  console.log(output || n);
}
