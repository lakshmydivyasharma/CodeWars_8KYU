https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

8 kyu
Filling an array (part 1)
1002987% of 1,1935,679 of 9,738RobinKnipe2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

Solution 1
function arr(N) {
  var filledArr = [];
  if (typeof N === 'number') {
    filledArr.push(0);
    for ( i = 1; i < N; i++){
      filledArr.push(filledArr[i-1] + 1);
    }
  }
  return filledArr;
}


Solution 2:
const array = n => (n ? [...new Array(n).keys()] : [])
