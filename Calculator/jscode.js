var firstNumber = '';
var secondNumber = '';
var isOperationClicked = false;
var selectedOperation = '';

function addNumber(number) {
    if (isOperationClicked) {
        secondNumber += number;
    } else {
        firstNumber += number;
    }
}

function selectOperation(operation) {
    if (isOperationClicked) {
        document.title = 'The operation is selected!';
        newOperation();
    } else {
        selectedOperation = operation;
        isOperationClicked = true;
    }
}

function calc() {

    switch (selectedOperation) {
        case '+':
            document.title = changeStringsToNumbers(firstNumber) + changeStringsToNumbers(secondNumber);
            break;
        case '-':
            document.title = changeStringsToNumbers(firstNumber) - changeStringsToNumbers(secondNumber);
            break;
        case '*':
            document.title = changeStringsToNumbers(firstNumber) * changeStringsToNumbers(secondNumber);
            break;
        case '/':
            document.title = changeStringsToNumbers(firstNumber) / changeStringsToNumbers(secondNumber);
            break;
    }
    newOperation();
}

function changeStringsToNumbers(number) {
    return Number(number);
}

function newOperation() {
    firstNumber = '';
    secondNumber = '';
    isOperationClicked = false;
}