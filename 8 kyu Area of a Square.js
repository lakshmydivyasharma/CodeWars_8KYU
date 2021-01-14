https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript

8 kyu 
Area of a Square
843189% of 9652,401 of 5,194romerojp
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)



//Math. pow() function returns the base to the exponent power

// toFixed() returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place.

function squareArea(A){
  return Number(Math.pow(2 * A / 3.1416, 2).toFixed(2))
}
