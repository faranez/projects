// faranezz

function calc (operator,a,b) {
    if (typeof a == 'number' && typeof b == 'number')  {
         switch (operator) {
              case 'sum': console.log(a + b);
              break;
              case 'minus': console.log(a - b);
              break;
              case 'multi': console.log(a * b); 
              break;
              case 'devide': console.log(a / b); 
              break;
              default: console.log('unknow operator');
        };
    }
      else {
          console.log('Error');
      };
    };
calc(2,2);