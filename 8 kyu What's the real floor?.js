https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

8 kyu
What's the real floor?
592088% of 1,2623,606 of 8,089acadet
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

solution 1:
function getRealFloor(n) {
  if(n > 13){
    return(n - 2)
  }else if (n > 0){
    return (n - 1)
  }
  else if (n < 0){
    return n
  }
}

solution 2:
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
