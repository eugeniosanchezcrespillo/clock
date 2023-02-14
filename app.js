
function clock(){
	
	let time = new Date();
	let hh = time.getHours();
	let mm = time.getMinutes();
	let ss = time.getSeconds();

	mm = mm < 10 ? '0'+mm : mm
	ss = ss < 10 ? '0'+ss : ss
	
	return hh+':'+mm+':'+ss;
}

function printButton(){
	const newButton = document.createElement('button');
	newButton.innerText = "Parar Reloj";
	document.body.append(newButton);
	newButton.addEventListener('click', function () {
		newButton.innerText = "Parado "+clock();
	});
}

function printClock(){
	const currentTime = document.createElement('h2');
	printButton();
	setInterval ( () => {
	currentTime.innerText = clock();
	document.body.append(currentTime);
	},1000);
}

printClock();
