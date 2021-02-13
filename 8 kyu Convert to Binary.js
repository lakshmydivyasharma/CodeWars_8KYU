https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript

8 kyu
Convert to Binary
942690% of 1,3914,425 of 8,982JapaX2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
Example:

toBinary(1)  /* should return 1 */
toBinary(5)  /* should return 101 */
toBinary(11) /* should return 1011 */

let toBinary = n => +n.toString(2)
