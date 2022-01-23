function calc (operator,a,b) {
    if (operator == 'sum' && typeof a == 'number' && typeof b == 'number') {
        console.log(a + b);
    }
    else if (operator == 'minus' && typeof a == 'number' && typeof b == 'number') {
        console.log(a - b);
    }
    else if (operator == 'multi' && typeof a == 'number' && typeof b == 'number') {
        console.log(a ** b);
    }
    else if (operator == 'devide' && typeof a == 'number' && typeof b == 'number') {
        console.log(a / b);
    }
    else {
        console.log('Error')
    }
};
calc('devide',2,2);