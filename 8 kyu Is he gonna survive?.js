https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

8 kyu
Is he gonna survive?
1073890% of 2,8979,689 of 24,032MMortaga1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

solution 1:
function hero(bullets, dragons){
if( bullets >= dragons * 2){
  return true
  }else return false
}

solution 2:
function hero(bullets, dragons){
return (bullets >= dragons*2)? true : false
}
