var mystring = "I an really hungry for some";

var foods = ['cheese', 'pie', 'breackfast', 'lunch'];

for(var i=0; i<foods.length; i++){

    var remainder = i % 2;

    if(remainder ===0){
        var foodUpper = foods[i].toUpperCase();
        console.log(`${mystring} ${foodUpper}`);
    }
    else{
        console.log(`${mystring} ${foods[i]}`);
    }
}

// shorter code //
for(var i=0; i<foods.length; i++){
    if(i % 2 ===0){
        console.log(`${mystring} ${foods[i].toUpperCase()} \n`);
    }
    else{
        console.log(`${mystring} ${foods[i]} \n`);
    }
}
