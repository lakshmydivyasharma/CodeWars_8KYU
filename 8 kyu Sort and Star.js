https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

8 kyu
Sort and Star
1666591% of 1,7764,769 of 11,843A.Partridge
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

FUNDAMENTALSSTRINGSARRAYS

// sort method to get it alphabetically right
// get spot [0]
// split that spot 0 word
// join it back with *** between each letter


function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
