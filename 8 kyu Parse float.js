https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript


8 kyu
Parse float
791885% of 1,0012,989 of 6,606wichu2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

const parseF = s => (Number.isNaN(parseFloat(s)) ? null : parseFloat(s))
