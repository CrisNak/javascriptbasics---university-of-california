(function(){
    'use strict'
    let converttype = 'miles';
	const heading = document.querySelector("h1");
	const intro = document.querySelector('p');
	const answerdiv = document.getElementById('answer');
	const form = document.getElementById('convert');

	document.addEventListener('keydown', function(event){
		let key = event.code;

		if(key === 'KeyK'){
			converttype = "kilometers";
			heading.innerHTML = "Kilometers to Miles Converter";
			intro.innerHTML = "Type in a number of kilometers and click the button to convert the distace to miles";
				
		}
		else if(key === 'KeyM'){
			converttype = "miles";
			heading.innerHTML = "Miles to Kilometers Converter";
			intro.innerHTML = "Type in a number of miles and click the button to convert the distace to kilometers";
		}
			
	});
	form.addEventListener('submit', function(event){
		event.preventDefault();

		const distance = parseFloat(document.getElementById('distance').value);
		if(distance){
			if (converttype =="miles"){
				const converted = (distance*1.609344).toFixed(2);
				answerdiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
			}
			else {
				const converted = (distance*0.62371192).toFixed(2);
				answerdiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;
			}

		}
		else{
			answerdiv.innerHTML = '<h2>Please provide a number!<h2>';
		}
			
	});
})();