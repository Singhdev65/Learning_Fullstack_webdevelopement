/* property of string

             ----------concatenation---------

var message = "Hello";
var name = prompt("What is your Name?");

alert(message + " " + name + "!");

          ---------------length --------------

var inputString = prompt("Please enter the string");

var countNumber  = inputString.length;

alert("You entered " + countNumber + " Letter")


--------------tweet count challenge ---------------

var inputString = prompt("Please enter the string");

var countNumber  = inputString.length;

var netLengthOfString = 240- countNumber;

alert("You entered " + countNumber + " Letter and you are left with " + netLengthOfString);


-----------------Slice function-------------------

var myName = "Prince";
myName.slice(0,1); // P
myName.slice(0,2); // Pr
myName.slice(0,6); // Prince
myName.slice();    // Prince


-------------Change casing of string -----------------

var myName = "Prince";
myName.toUppercase(); // PRINCE
myName.toLowerCase(); // prince


            -------Challenge --------
    
    var yourName = prompt("What is your name?");
    var firstChar = yourName.slice(0,1);
    var upperCaseFirstChar = firstChar.toUpperCase();
    var restOfChar = yourName.slice(1,yourName.length);
    var lowerCaseRestOfChar = restOfChar.toLowerCase();
    alert("Hello " + upperCaseFirstChar + lowerCaseRestOfChar + "!");
    

*/