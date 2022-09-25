function dostuff(){

    var mystring = "Here is a message";
    var upperstring = mystring.toUpperCase();
    console.log(mystring);
    console.log(upperstring);
}
dostuff();


function uppermessage(message){
    var upper = message.toUpperCase();
    console.log(upper);
}
uppermessage("An important message!");


function addnums(num1, num2){
    var sum = num1 + num2;
    console.log(sum);
}
addnums(3,4)


function returnsum(num1, num2){
    var sum = num1 + num2;
    return sum;
}
console.log(returnsum(5,3))


console.log(Math.random());


function randomint(min, max){
    var numofvalues = max - min + 1;
    console.log(numofvalues);
    var randomnum = Math.random();
    var randomval = randomnum * numofvalues;
    console.log(randomval);
    var roundedrandomval = Math.floor(randomval);
    console.log(rondedrandomval);
    var finalnum = min + roundedrandomval;
    console.log(finalnum);
}
randomint(5,10)


var food = ['cheese', 'fruit', 'chicken', 'pie'];
function randomint(min, max){
    var numofvalues2 = max - min + 1;
    var randomnum2 = Math.random();
    var randomval2 = randomnum * numofvalues;
    var roundedrandomval2 = Math.floor(randomval);
    var finalnum2 = min + roundedrandomval;

    return finalnum2;
}
console.log(food[randomint(0,3)]);

//shorter version//
var food = ['cheese', 'fruit', 'chicken', 'pie'];
function randomint(min, max){
    return Math.floor((max-min+1)*Math.random()) +min;
}
console.log(food[randomint(0,3)]);



var greeting ="hello, and good morning:";

function capitalizefunction(anystring){
    anystring = anystring.toUpperCase();
    return anystring;
}

var capitalizeexpression = function(anystring){
    anystring = anystring.toUpperCase();
    return anystring;
}

var capitalizearrow = anystring => anystring.toUpperCase();

console.log(capitalizeexpression(greeting))
console.log(capitalizefunction(greeting))
console.log(capitalizearrow(greeting))
