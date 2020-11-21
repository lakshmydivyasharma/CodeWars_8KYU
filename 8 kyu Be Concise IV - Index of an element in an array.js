https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript

8 kyu
Be Concise IV - Index of an element in an array
24585% of 4371,706 of 1,711donaldsebleung
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Be Concise IV - Index of an element in an array
Task
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) return i;
  }
  return "Not found";
}
