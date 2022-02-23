// faranezz

const body = {
    numbers: document.querySelectorAll('.button'),
    signs: document.querySelectorAll('.sign'),
    outPut: document.querySelector('.screen'),
    restart: document.querySelector('.btn--C') ,
    deleteOne: document.querySelector('.btn--arrow'),
    result: document.querySelector('.equal')

}
let num1 = null;
let num2 = null;
let result = null;

body.restart.addEventListener('click',isRestart);
function isRestart () {
    num1 = null;
    num2 = null;
    result = null;
    body.outPut.textContent = '0';
}

// FOR NUMBERS
for(let isNumber of body.numbers) {
    isNumber.addEventListener('click',getNumbers);
    function getNumbers () {
        if(body.outPut.textContent === '0') {
            body.outPut.textContent = '';
        }
        body.outPut.textContent = body.outPut.textContent + isNumber.textContent;
    }
}

// FOR DELETE
body.deleteOne.addEventListener('click',deleteOne);
function deleteOne () {
    let newStr = body.outPut.textContent;
    body.outPut.textContent = newStr.slice(0,-1);
}

for (let isOperations of body.signs) {
    isOperations.addEventListener('click', getOperations);
    function getOperations() {
        if (isOperations) {
            num1 = body.outPut.textContent;
            body.outPut.textContent = '';
            body.outPut.textContent = isOperations.textContent;
        }
    }
};


body.result.addEventListener('click', getResult);
function getResult() {
    num2 = body.outPut.textContent;
    if (num2 === '÷0' || num2 === '÷') return body.outPut.textContent = 'Error';
    if (num2[0] === '+') {
        result = +num1 + +num2.slice(1);
    } else if (num2[0] === '-') {
        result = +num1 - +num2.slice(1);
    } else if (num2[0] === '÷') {
        result = +num1 / +num2.slice(1);
    } else if (num2[0] === '×') {
        result = +num1 * +num2.slice(1);
    }
    if (Number.isNaN(+result)) return body.outPut.textContent = '';
    if (String(result).length >= 10) {
        body.outPut.textContent = result.toFixed(5);
    } else {
        body.outPut.textContent = result;
    }
};









