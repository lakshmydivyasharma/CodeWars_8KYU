https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript

8 kyu
Swap Values
1002483% of 1,1034,667 of 9,293dnolan1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

// notes: use array.reverse to reverse all values

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

function swapValues(arr) {
    return arr.reverse()
}
