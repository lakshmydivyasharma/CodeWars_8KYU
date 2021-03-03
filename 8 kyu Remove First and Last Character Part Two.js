https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

8 kyu
Remove First and Last Character Part Two
1004385% of 9585,982 of 8,336Steadyx
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

const array = word => {
  const characters = word.split(',')
  characters.shift()
  characters.pop()
  return characters.length ? characters.join(' ') : null
}


second solution:
// Short Solution
const array = array_ =>
  array_
    .split(',')
    .slice(1, -1)
    .join(' ') || null
