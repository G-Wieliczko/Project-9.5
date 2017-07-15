var alertButton = document.getElementsByClassName('button');
var buttonLength = alertButton.length;
for (var i = 0; i < buttonLength; i++) {
	alert(alertButton[i].innerText);
}

console.log(alertButton.length); //check how many time it will displayed