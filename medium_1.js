/* For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!


Given a string of words.
Print the string of words 10 times.
Each time the string of words is printed the padding at the start of the string should increase by 1.


let string = 'The Flintstones Rock!';
let i ;

for (i = 0; i <= 9; i ++) {
	console.log(string.padStart(string.length+i, ' '));
}

*/


/* Given a string

Print a new string that swaps the case of all of the letters:

*/

/* let munstersDescription = "The Munsters are creepy and spooky.";

let creepyMunsterDescription;

creepyMunsterDescription = munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(creepyMunsterDescription);
*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
};

console.log(factors(0));
