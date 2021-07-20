const defaultResult = 0;
let currentResult = defaultResult; //global value

//array defintion
let logEntries = [];

//define functions
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function writeToLog(operationIdentifier, prevResult, opValue, newResult) {
  //shorthanding the k/v process
  const logEntry = {
    operationIdentifier, prevResult, opValue, newResult
  };
  logEntries.push(logEntry);
}

function createAndWriteLog(operator, initialResult, opValue) {
  const calcDescription = `${initialResult} ${operator} ${opValue}`;
  writeToLog(operator, initialResult, opValue, currentResult); //function used inside other function
  outputResult(currentResult, calcDescription);
  console.log(logEntries);
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
