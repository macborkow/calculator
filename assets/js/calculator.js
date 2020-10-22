let digitsSpace = document.getElementById("digits");


function init() {
	let digits = [];
	for(let i = 0; i < 9; ++i) {
		digits.push(document.createElement("div"));
		digits[i].classList.add("button");
		digits[i].id = i.toString();
		digits[i].appendChild(document.createTextNode(i.toString()));
		digitsSpace.appendChild(digits[i]);
	}
}

document.onload = init();