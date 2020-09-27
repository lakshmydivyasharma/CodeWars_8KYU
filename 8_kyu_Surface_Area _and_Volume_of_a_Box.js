https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

8kyu
Surface Area and Volume of a Box
723088% of 1,3983,487 of 11,348KaraM
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write a function that returns the total surface area and volume of a box as an array: [area, volume]


PREP:
parameters: width, height, depth
return: [surface area, volume]

surface area = (depth * width + depth * height + width * height) * 2
volume = width * height * depth

solution:

const getSize = (width, height, depth) => [
  (depth * width + depth * height + width * height) * 2,
  width * height * depth,
]
