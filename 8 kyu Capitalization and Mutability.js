https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript


8 kyu
Capitalization and Mutability
592890% of 1,3216,088 of 10,450kolohelios
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

//break the word in two pieces: 1st letter and rest of the word
// capitalize the first letter
// slice off everything after spot 0 so at 1
// concatenate it back totgether

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
