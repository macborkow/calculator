let digitsSpace = document.getElementById("digits");


function init() {
	let digits = [];
	for(let i = 1; i <= 9; ++i) {
		digits.push(document.createElement("div"));
		digits[i-1].classList.add("button");
		digits[i-1].id = i.toString();
		digits[i-1].appendChild(document.createTextNode(i.toString()));
		digitsSpace.appendChild(digits[i-1]);
	}
}

document.onload = init();