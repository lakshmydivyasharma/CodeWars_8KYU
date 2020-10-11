https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

8 kyu
L1: Set Alarm
721188% of 1,9575,008 of 13,410Swolebrain
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false setAlarm(false, true) -> false setAlarm(false, false) -> false setAlarm(true, false) -> true

setalarm(true, true) -> false
setalarm(false, true) -> false
setalarm(false, false) -> false
setalarm(true, false) -> true

const setAlarm = (employed, vacation) => employed && !vacation
