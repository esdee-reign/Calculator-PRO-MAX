class Calculator {
    constructor(previousOperandTextEement, currentOperandTextEement) {
        this.previousOperandTextEement = previousOperandTextEement;
        this.currentOperandTextEement = currentOperandTextEement;
    }

    clear () {

    }

    delete () {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
         
    }

}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-ewuals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextEement = document.querySelector('[data-previous-operand]')
const currentOperandTextEement = document.querySelector('[data-current-operand]')