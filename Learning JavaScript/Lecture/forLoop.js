
/* ----------------for Loop ----------------------

var output = [];

function fizzBuzz () {
    
    for(var count = 1; count <= 100; count ++){
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
    }
    console.log(output);
}

fizzBuzz()

*/