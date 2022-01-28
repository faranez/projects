// faranezz

function calc (operator,a,b) {
    if (operator == 'sum' && typeof a == 'number' && typeof b == 'number') {
        return(a + b);
    }
    else if (operator == 'minus' && typeof a == 'number' && typeof b == 'number') {
        return(a - b);
    }
    else if (operator == 'multi' && typeof a == 'number' && typeof b == 'number') {
        return(a * b);
    }
    else if (operator == 'devide' && typeof a == 'number' && typeof b == 'number') {
        return(a / b);
    }
    else {
        return('Error')
    }
};
console.log(calc('devide',2,2));
