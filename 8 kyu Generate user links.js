https://www.codewars.com/kata/57037ed25a7263ac35000c80/train/javascript

8 kyu
Generate user links
491382% of 353853 of 1,777matt c
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Generate user links
Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
reference
use this as a reference encoding

function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}
