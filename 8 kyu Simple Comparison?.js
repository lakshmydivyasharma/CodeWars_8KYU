https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript

8 kyu
Simple Comparison?
13389% of 5772,458Peter Rhodes
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

FUNDAMENTALSSTRINGSNUMBERSINTEGERS

function add(a, b){
	return +a==+b
}
