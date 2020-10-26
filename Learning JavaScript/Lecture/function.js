/* function are used for packeging the codes, i,e if a code is to be used repeatedly then we can used a function to bundle the code.

function evenNumber (a){
    if(a % 2 == 0){
        console.log(a + "is a even number")
    }else 
    console.log("Odd number")
} */

/*

var costPerBottle = 20; 
    

function getMilk(amount) { 
    var bottleOfMilk = amount / costPerBottle; 
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    alert("Please give me " + parseInt(bottleOfMilk) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return amount % 20;
  }
  var change = getMilk(200);
  console.log(change);

  */


//   --------------Challenge ---------------

function bmiCalculator(weight, height) {
    var BMI = weight / (height * height)
    return BMI;
}

bmiCalculator(65, 1.8)