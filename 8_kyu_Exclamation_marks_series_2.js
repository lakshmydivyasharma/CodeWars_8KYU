https://www.codewars.com/kata/57faece99610ced690000165/train/javascript


8 kyu
Exclamation marks series #2: Remove all exclamation marks from the end of sentence
613092% of 8691,818 of 4,492myjinxin20151 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

function remove(s){
let arr =[]
  for (let i = 0; i < s.length; i++){
    if(s[i] = '!' && arr.includes('H')){
      arr.push(s.slice(i).split('!').join(''));
      return arr.join('');
    } else {
      arr.push(s[i]);
    }
  }
}
