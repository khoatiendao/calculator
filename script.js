let runningTotal = 0;
let buffer = "0";
let previousOperator;

const result = document.querySelector('.result_text');

function buttonClick(value) {
    if(isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    result.innerText = buffer;
}

function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1) {
                buffer = '0'
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if(buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    } else if(previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if(previousOperator === '×') {
        runningTotal *= intBuffer;
    } else if(previousOperator === '÷') {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString) {
    if(buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

var delete_All = document.querySelector('.delete_All_text');
var delete_One = document.querySelector('.delete_One_icon_back');
var plus = document.querySelector('.Plus_text');
var number_7 = document.querySelector('.number7_text');
var number_8 = document.querySelector('.number8_text');
var number_9 = document.querySelector('.number9_text');
var multiplication = document.querySelector('.multiplication_text');
var number_4 = document.querySelector('.number4_text');
var number_5 = document.querySelector('.number5_text');
var number_6 = document.querySelector('.number6_text');
var subtraction = document.querySelector('.subtraction_text');
var number_1 = document.querySelector('.number1_text');
var number_2 = document.querySelector('.number2_text');
var number_3 = document.querySelector('.number3_text');
var divided = document.querySelector('.divided_text');
var number_0 = document.querySelector('.number0_text');
var equal = document.querySelector('.equal_text');

function init() {
    delete_All.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    delete_One.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    plus.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    subtraction.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    multiplication.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    divided.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    equal.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_0.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
    
    number_1.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_2.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_3.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_4.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_5.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_6.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_7.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_8.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

    number_9.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init()