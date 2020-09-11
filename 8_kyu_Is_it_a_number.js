https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

8 kyu
Is it a number?
1324788% of 9271,368 of 5,356provector3 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")


// The parseFloat() function parses an argument & returns a floating point number.

function isDigit(s) {
 return s==parseFloat(s);
}
