https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

8 kyu
Rock Paper Scissors!
37510992% of 2,5104,998 of 17,862brunolm
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'
  if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'paper' && p2 === 'rock')
  )
    return 'Player 1 won!'
  if (
    (p2 === 'scissors' && p1 === 'paper') ||
    (p2 === 'rock' && p1 === 'scissors') ||
    (p2 === 'paper' && p1 === 'rock')
  )
    return 'Player 2 won!'
}
