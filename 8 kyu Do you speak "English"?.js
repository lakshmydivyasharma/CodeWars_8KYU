https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript

8 kyu
Do you speak "English"?
231592% of 6653,720 of 3,732tyeung2017
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
   return /english/i.test(sentence)
}
