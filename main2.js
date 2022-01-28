function calc (opetator,a,b) {
        if (typeof a == 'number' && typeof b == 'number') {
            switch (opetator) {
                case 'sum': return(a + b); 
                case 'minus': return(a - b);
                case 'multi': return(a * b); 
                case 'devide': return(a / b); 
                default: return('Operator error');
        };
    }
        else {
            return('error');
        }
    };
    console.log(calc('devide',2,4));