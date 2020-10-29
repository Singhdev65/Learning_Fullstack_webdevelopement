//-----------------while loop---------------------------

// var i = 1;

// while(i<3) {
//     console.log(i);
//     i++;
// }

/* -------------------Challenge FizzBuzz Question ----------------

var output = [];

function fizzBuzz () {
    var count = 1;
    while (count <= 100){
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
    }
    console.log(output);
}

fizzBuzz()

*/

// ----------------------beer bottles challenge-------------------
function beerBottles(){
    var count = 100;
    
    while (count > 0){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around,");
        count --;
        if(count === 0){
            console.log("no more bottles left");
        }else {
        console.log(count + " bottles of beer on the wall.");
        }
        
    }
    }
beerBottles()