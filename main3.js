//faranezz

function calc (operator,a,b) {
    let conteiner = {
        sum: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b,
};
        if (typeof a == 'number' && typeof b == 'number' && conteiner[operator] !== undefined) {
            
    console.log(conteiner[operator]);
 }
 else {
     console.log('Error');
  };
};

calc('sum',2,2);
calc('sub',2,1);
calc('div',1,1);
calc('div',2,1);
