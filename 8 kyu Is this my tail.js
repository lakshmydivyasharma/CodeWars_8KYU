https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript

8 kyu
Is this my tail?
663886% of 1,4464,367 of 10,394A.Partridge3 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be strings, and normal letters.

For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.

const correctTail = (body, tail) => body.endsWith(tail)
