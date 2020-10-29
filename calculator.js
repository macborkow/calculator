let digitsSpace = document.getElementById("digits");
let operationsSpace = document.getElementById("operations");
let screenSpace = document.getElementById("screen");
let digits = [];
let operations = {};
let screenValue = "";
let storedValue = "";
let currentOperation = "";
let waitingForInput = false;
let dotUsed = false;

function init() {
	
	screenValue = document.createTextNode("HI WORLD .");
	screenSpace.appendChild(screenValue);
	
	for(let i = 1; i <= 9; ++i) {
		digits.push(document.createElement("div"));
		digits[i-1].classList.add("button");
		digits[i-1].id = i.toString();
		digits[i-1].appendChild(document.createTextNode(i.toString()));
		digits[i-1].addEventListener("click", () => { append(i); });
		digitsSpace.appendChild(digits[i-1]);
	}
	
	digits.push(document.createElement("div"));
	digits[9].classList.add("button");
	digits[9].classList.add("zerobutton");
	digits[9].id = "0";
	digits[9].appendChild(document.createTextNode("0"));
	digits[9].addEventListener("click", () => { append(0); });
	digitsSpace.appendChild(digits[9]);

	operations["C"] = document.createElement("div");
	operations["C"].classList.add("button");
	operations["C"].classList.add("opbutton");
	operations["C"].id = "clear";
	operations["C"].appendChild(document.createTextNode("C"));
	operations["C"].addEventListener("click", clear);
	
	operations["."] = document.createElement("div");
	operations["."].classList.add("button");
	operations["."].classList.add("opbutton");
	operations["."].id = "dot";
	operations["."].appendChild(document.createTextNode("."));
	operationsSpace.appendChild(operations["."]);
	operations["."].addEventListener("click", putDot);
	
	operationsSpace.appendChild(operations["C"]);
	operations["+"] = document.createElement("div");
	operations["+"].classList.add("button");
	operations["+"].classList.add("opbutton");
	operations["+"].id = "plus";
	operations["+"].appendChild(document.createTextNode("+"));
	operationsSpace.appendChild(operations["+"]);
	operations["+"].addEventListener("click", () => { operate(); currentOperation = "+"; });
		
	operations["-"] = document.createElement("div");
	operations["-"].classList.add("button");
	operations["-"].classList.add("opbutton");
	operations["-"].id = "minus";
	operations["-"].appendChild(document.createTextNode("-"));
	operationsSpace.appendChild(operations["-"]);
	operations["-"].addEventListener("click", () => { operate(); currentOperation = "-"; });
	
	operations["*"] = document.createElement("div");
	operations["*"].classList.add("button");
	operations["*"].classList.add("opbutton");
	operations["*"].id = "multiply";
	operations["*"].appendChild(document.createTextNode("*"));
	operationsSpace.appendChild(operations["*"]);
	operations["*"].addEventListener("click", () => { operate(); currentOperation = "*"; });
	
	operations["/"] = document.createElement("div");
	operations["/"].classList.add("button");
	operations["/"].classList.add("opbutton");
	operations["/"].id = "divide";
	operations["/"].appendChild(document.createTextNode("÷"));
	operationsSpace.appendChild(operations["/"]);
	operations["/"].addEventListener("click", () => { operate(); currentOperation = "/"; });
	
	operations["="] = document.createElement("div");
	operations["="].classList.add("button");
	operations["="].classList.add("opbutton");
	operations["="].classList.add("zerobutton");
	operations["="].id = "equal";
	operations["="].appendChild(document.createTextNode("="));
	operationsSpace.appendChild(operations["="]);
	operations["="].addEventListener("click", operate);

}

function clear() {
	screenValue.nodeValue = "";
	currentOperation = "";
	storedValue = "";
	dotUsed = false;
}

function append(number) {
	if(waitingForInput) {
		screenValue.nodeValue = "";
		waitingForInput = false;
		dotUsed = false;
	}
	if(screenValue.nodeValue.length < 10) {
		screenValue.nodeValue += number.toString(); 
	}
}

function putDot() {
	if(screenValue.nodeValue.length < 10 && dotUsed == false && !waitingForInput) {
		screenValue.nodeValue += ".";
		dotUsed = true;
	}
}

function operate() {
	if(currentOperation != "") { 
		let intStored = parseFloat(storedValue);
		let intScreen = parseFloat(screenValue.nodeValue);
		let result = 0;
		switch(currentOperation) {
			case "+": 
				result = (intStored+intScreen).toFixed(2);
				screenValue.nodeValue = result.toString();
				break; 
			case "-": 
				result = (intStored-intScreen).toFixed(2);
				screenValue.nodeValue = result.toString();
				break;
			case "*":
				result = (intStored*intScreen).toFixed(2);
				screenValue.nodeValue = result.toString();
				break;
			case "/": 
				if(intScreen == 0) {
					screenValue.nodeValue = "boom!";
				} else {
					result = parseFloat(intStored/intScreen).toFixed(2);
					screenValue.nodeValue = result.toString();
				}
				break;
		}
		
		screenValue.nodeValue = screenValue.nodeValue.length < 10 ? screenValue.nodeValue : "e";
		storedValue = screenValue.nodeValue;
		waitingForInput = true;
		currentOperation = "";
	} else {
		waitingForInput = true;
		storedValue = screenValue.nodeValue;
	}	

}

document.onload = init();

setTimeout( clear, 1000);



