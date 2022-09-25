(function(){
    'use strict';
    document.getElementById('convert').addEventListener('submit', function(event){
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        //parseFloat: identifica se é um float
        const answer = document.getElementById('answer');
        
        if(distance){//se distancia for um numero faça:
            const conversion = (distance * 1.689344).toFixed(2); //toFixed dá duas casas decimais
            
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometer</h2>`

        }
        else{
            answer.innerHTML = '<h2>Please provide a number</2>';

        }
        

    });

})();