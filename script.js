let operatorCount = 1; //prevent user from entering multiple operators at once
let history = document.getElementById("history").innerText;
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const backSpaceButton = document.querySelector("#backspace");
const allClearButton = document.querySelector("#allClear");
const equalsButton = document.querySelector("#evaluate");

function displayOutput(num){
    document.getElementById("current").innerText = num.toLocaleString("en");
}

equalsButton.addEventListener("click", () => {
    let current = document.getElementById("current").innerText
    lastValue = document.getElementById("current").innerText.substring(-1).slice(-1)
    if (current == ""){
        return
    }
    if (lastValue == "*" || lastValue == "/" || lastValue == "+" || lastValue == "-"){
        alert("Need to enter a number.");
        return;
    }
    document.getElementById("history").innerText = document.getElementById("current").innerText + " =";
    document.getElementById("current").innerText = eval(document.getElementById("history").innerText.slice(0,-1));    
})

numberButtons.forEach(number => {
    number.addEventListener("click", () => {
        let displayNumber = document.getElementById("current").innerText;
        displayNumber += number.id;
        operatorCount = 0;
        return displayOutput(displayOutput);
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operatorCount == 0) {
            let displayOperator = document.getElementById("current").innerText;
            displayOperator += operator.id;
            ++operatorCount;
            return displayOutput(disolayOperator);
        } else {
            return
        }
    })
})

backSpaceButton.addEventListener("click", () => {
    num = document.getElementById("current").innerText.slice(0,-1);
    let lastValue = number.substring(-1).slice(-1);
    if (lastValue == "*" || lastValue == "/" || lastValue == "+" || lastValue == "-" || lastValue == ""){
        operatorCount = 1;
    } else {
        operatorCount = 0;
    }
    return displayOutput(num);
})

allClearButton.addEventListener("click", () => {
    num = document.getElementById("current").innerText;
    num = "";
    operatorCount = 1；
    document.getElementById("history").innerText = "";
    return displayOutput(num);
})