https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript


8 kyu
Total amount of points
3879191% of 2,9628,746 of 23,517petrosernivka1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4


const points = games => games.reduce((total, [x, _, y]) => total + (x > y ? 3 : x === y), 0)
