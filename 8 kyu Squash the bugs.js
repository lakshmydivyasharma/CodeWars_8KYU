https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

8 kyu
Squash the bugs
1103788% of 1,7175,188 of 12,340A.Partridge
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

solution 1:
function findLongest(str) {
  var spl = str.split(" ");
  let longest = 0
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
     }
  }
    return longest
}


solution 2:
function findLongest(str) {
    return Math.max(...str.split(' ').map(word=>word.length))
}
