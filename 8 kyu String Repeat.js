https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

String repeat
46914886% of 8,08024,286 of 68,369wichu2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// n means number
// s means string
// let string = empty
// for loop that says go through it and for as many times as you see it then add the string to the end
// then just return the string


function repeatStr (n, s) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += s;
    }
    return str;
}
