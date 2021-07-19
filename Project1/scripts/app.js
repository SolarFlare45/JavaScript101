const defaultResult = 0;
let currentResult = defaultResult; //global value

//define functions
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, initialResult, opValue) {
  const calcDescription = `${initialResult} ${operator} ${opValue}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const opValue = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += opValue; //value is itself added to operand
  createAndWriteLog("+", initialResult, opValue);
}

function subtract() {
  const opValue = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= opValue;
  createAndWriteLog("-", initialResult, opValue);
}

function multiply() {
  const opValue = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= opValue;
  createAndWriteLog("*", initialResult, opValue);
}

function divide() {
  const opValue = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= opValue;
  createAndWriteLog("/", initialResult, opValue);
}

//add functions as event listeners
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
