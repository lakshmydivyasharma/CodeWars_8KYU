https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript


8 kyu
Remove the time
412091% of 7121,926 of 4,959radiocontrolled1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
 return longDate.split(',')[0]
}
