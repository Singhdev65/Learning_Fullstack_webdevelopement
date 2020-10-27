//Array is a collection of Data represented by square barckets.

var dryFruits = ["Cashew", "donuts", "raisens","Almonds"]

dryFruits[0] //Cashew
dryFruits[1] //donuts
dryFruits[2] //raisens
dryFruits[3] //Almonds


dryFruits.length //4 (Gives the number of elements in an Array)

console.log(dryFruits.includes("raisens"));

/* ---------------Challenge ---------------------

var guestList = ["Prince", "Anjali", "Praveen", "Ranju","Nibha", "Nippi"];

var guestName = prompt("May I know your Name Please?");

if(guestList.includes(guestName)){
    alert("You are allowed for the party");
}else
alert("We Can't permit your for the party");

*/

/* -------------Challenge -----------------

var output = [];
var count = 1;

function fizzBuzz() {
       if(count % 3 === 0 && count % 5 === 0){
           output.push("FizzBuzz");
       }
       else if(count % 3 === 0){
       output.push("fizz");
       }else if(count % 5 ===0){
           output.push("buzz");
       }
       else {
           output.push(count);
       }
       count++;
       console.log(output);
}

fizzBuzz()
*/
