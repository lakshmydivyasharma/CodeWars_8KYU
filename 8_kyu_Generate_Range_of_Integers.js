https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

8 kyu
Generate range of integers
1332792% of 1,2606,992 of 8,814XxxX88
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)


// create a for loop that starts at min and ends at max
// increment by step++
// create a variable that allows storing it
// push() method adds new items to the end of an array, and returns the new length.

function generateRange(min, max, step) {
  const result = []
  for (let i = min; i <= max; i += step) {
    result.push(i)
  }

  return result
}
