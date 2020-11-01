https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

8 kyu
Square(n) Sum
39013290% of 5,00419,116 of 51,730jhoffner1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

FUNDAMENTALSARITHMETICMATHEMATICSALGORITHMSNUMBERSARRAYSLISTSDATA STRUCTURES

NOTES:
// use reduce function
// return b*b (number * number) + total amount from before 

function squareSum(numbers){
  return numbers.reduce(function(a, b){
    return (b*b) + a;
  }, 0)
}
