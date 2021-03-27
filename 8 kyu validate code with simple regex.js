https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

8 kyu
validate code with simple regex
733492% of 1,0462,680 of 6,143daymos2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.

const validateCode = code => /^[1-3]/g.test(code)
