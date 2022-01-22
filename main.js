// faranezz

let a;
let b;
let operator;



if (operator == 'plus' || operator == 'minus' || operator == 'multi' || operator == 'devide') {
     operator = true;
}
else {
    operator = false;
}

const isValid = (typeof a == 'number' && typeof b == 'number' && operator == true);



function calc (operator,a,b) {
    if (isValid == true || operator == 'plus') {
        console.log(a + b);

    }
    else if (isValid == true || operator == 'minus') {
        console.log(a - b);

    }
    else if (isValid == true || operator == 'multi') {
        console.log(a ** b);
    }
    else if (isValid == true || operator == 'devide') {
        console.log(a / b)
    }
    else {
        console.log('Error')
    }
};

calc ('multi',2,2);