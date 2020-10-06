https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

8 kyu
Short Long Short
712787% of 1,3296,895 of 16,845
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:

solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"

solution 1:
function solution(a, b){
 if(a.length < b.length){
   return a + b + a
}else{
  return b + a + b
  }
}

solution 2:
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}
