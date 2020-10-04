https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript

8 kyu
Word Count
632283% of 4544,648 of 4,652HighQuality
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Can you realize a function that returns word count from a given string?

You have to ensure that spaces in string is a whitespace for real.

What we want and finish of work:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we got for your code:

Function have to count words, but not spaces, so be sure that it does right.
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
Be sure that words with chars like -, ', ` are counted right.

notes:
Regular Expression delimiter
/\s/g. / is the Regular Expression delimiter.
It marks the beginning and end of a pattern. \s matches all space characters: '\t' , '\n' , '\r' , '\f' , ' ' , and a number of others.
It's a regular expression where the \s means "match whitespace" and the g is a flag which means "global", i.e. match all whitespace, not just the first.

function countWords(str) {
  return str.split(/\s/g).filter(Boolean).length
}
