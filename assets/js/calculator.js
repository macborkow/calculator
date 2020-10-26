let digitsSpace = document.getElementById("digits");
let operationsSpace = document.getElementById("operations");
let screenSpace = document.getElementById("screen");
let digits = [];
let operations = {};

function init() {
	for(let i = 1; i <= 9; ++i) {
		digits.push(document.createElement("div"));
		digits[i-1].classList.add("button");
		digits[i-1].id = i.toString();
		digits[i-1].appendChild(document.createTextNode(i.toString()));
		digitsSpace.appendChild(digits[i-1]);
	}
	screenSpace.appendChild(document.createTextNode("HI WORLD ."));
	operations["C"] = document.createElement("div");
	operations["C"].classList.add("button");
	operations["C"].classList.add("opbutton");
	operations["C"].id = "clear";
	operations["C"].appendChild(document.createTextNode("C"));
	
	operationsSpace.appendChild(operations["C"]);
	operations["+"] = document.createElement("div");
	operations["+"].classList.add("button");
	operations["+"].classList.add("opbutton");
	operations["+"].id = "plus";
	operations["+"].appendChild(document.createTextNode("+"));
	operationsSpace.appendChild(operations["+"]);
		
	operations["-"] = document.createElement("div");
	operations["-"].classList.add("button");
	operations["-"].classList.add("opbutton");
	operations["-"].id = "minus";
	operations["-"].appendChild(document.createTextNode("-"));
	operationsSpace.appendChild(operations["-"]);
	
	operations["."] = document.createElement("div");
	operations["."].classList.add("button");
	operations["."].classList.add("opbutton");
	operations["."].id = "dot";
	operations["."].appendChild(document.createTextNode("."));
	operationsSpace.appendChild(operations["."]);
	
	operations["*"] = document.createElement("div");
	operations["*"].classList.add("button");
	operations["*"].classList.add("opbutton");
	operations["*"].id = "multiply";
	operations["*"].appendChild(document.createTextNode("*"));
	operationsSpace.appendChild(operations["*"]);
	
	operations["/"] = document.createElement("div");
	operations["/"].classList.add("button");
	operations["/"].classList.add("opbutton");
	operations["/"].id = "divide";
	operations["/"].appendChild(document.createTextNode("÷"));
	operationsSpace.appendChild(operations["/"]);
}

document.onload = init();