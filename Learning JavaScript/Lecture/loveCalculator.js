//--------------Random number Generation----------------

// var n = Math.random(); /* generates random numbers from 0 -1, 
//                             but it never reaches 1*/
// n = n * 6; // increases the domain , now it has the value from 0 to 5.9999.
// n = Math.floor(n); // returns the greatest integer function for the number.
// console.log(n);

/* ----------------Challenge -------------------- */

// prompt("Please Enter your Name: ");
// prompt("Please Enter your crush Name: ");
// var n = math.random();
// n = n*100;
// alert("your Love percentage is " + n + "%");


/*
function loveCalculator(name1, name2){
    prompt("Plesae Enetr your Name");
    prompt("Plesae Enetr your Crush Name");
    var n = Math.random();
    n *= 99;
    alert("Your Love Percentage is " + (Math.floor(n) + 1) + "%");
}

loveCalculator()
*/


/*

--------------------control flow statement-------------------


prompt("Please Enter your Name");
prompt("Plesae Enter your crush Name");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if(loveScore >90){
    alert("Made for Each Other")
}
else if(loveScore > 60 && loveScore < 90){
    alert("both will Make a great couple");
}
else{
    alert("not a good match");
}

*/



/* -----------------------Equality--------------------------

==== is equal to

1 === 1 // true     
1 === "1" //false

1 == 1 //true
1 == "1" //true

!== is not Equal to

< is less than

> is greater than

>= is greater than or equal to

<= is less than or equal to

&& and operator

|| or opearator

*/


function bmiCalculator (weight, height) {
    var BMI = (weight / (height * height));
    
    if(BMI < 18.5){
        return "Your BMI is " + BMI + " , so you are underweight."
    }
    else if (BMI >= 18.5 && BMI <= 24.9){
        return "Your BMI is " + BMI + " ,so you have a normal weight."
    }
    else(BMI > 24.9)
        return "Your BMI is " + BMI + " , so you are overweight."
    }

bmiCalculator(75,1.5)

