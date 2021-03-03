https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript


8 kyu
Century From Year
53714490% of 5,79722,275 of 55,031MrZizoScream
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

const century = year => {
  const result = String(year / 100).split('.')
  return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])
}
