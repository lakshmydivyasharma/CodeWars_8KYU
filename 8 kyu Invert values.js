https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

8 kyu
Invert values
2736989% of 4,27811,679 of 35,003user7657844
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}
