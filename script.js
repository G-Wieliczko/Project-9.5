var alertButton = document.getElementsByClassName('button');

for (var x=0; x<alertButton.length; x++) {
	alert(alertButton[x].innerText);
}

console.log(alertButton.length); //check how many time it will displayed