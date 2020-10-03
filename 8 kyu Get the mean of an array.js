https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

8 kyu
Get the mean of an array
1674691% of 2,5598,436 of 22,150AzariasB1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.


notes:
use reduce and math.floor to round it down

const getAverage = marks =>
  Math.floor(marks.reduce((total, value) => total + value, 0) / marks.length)
