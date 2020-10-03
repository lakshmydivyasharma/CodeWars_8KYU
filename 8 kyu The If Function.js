https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

8 kyu
The 'if' function
1533868% of 1,2415,367 of 11,490user5783876 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}
