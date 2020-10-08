https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

8 kyu
Fake Binary
31512990% of 3,2379,891 of 25,572A.Partridge
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = x => x.replace(/\d/g, d => (d >= 5 ? 1 : 0))
