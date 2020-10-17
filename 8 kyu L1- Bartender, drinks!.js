// use switch statements

8 kyu
L1: Bartender, drinks!
1082088% of 1,0903,833 of 7,918Swolebrain
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine"
 "Politician"	"Your tax dollars"
 "Rapper"	"Cristal"
 *anything else*	"Beer"

function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return  "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}
