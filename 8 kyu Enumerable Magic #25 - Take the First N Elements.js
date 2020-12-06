https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript

8 kyu
Enumerable Magic #25 - Take the First N Elements
451489% of 1,1433,286 of 7,520bellmyer
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

notes:
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]


solution:

function take(arr, n) {
  return arr.slice([0], n)
}
