https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

8 kyu
Will you make it?
925287% of 2,6916,983 of 21,122user2514386
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Will you make it?
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

Solution 1:
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(mpg * fuelLeft >= distanceToPump){
    return true
  }
  else{
    return false
  }
};

Solution 2:
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;
