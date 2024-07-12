/*
==      equal to
===     strict equal to 
>=      Greater than equal to 
<=      Less than equal to 
!=      Not equal to 
!==     Strict not equal to
>       Greater Than
<       Less Than

*/

/*************************************************************/

// Equal to Operator

const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false

/*************************************************************** */

// Not Equal to Operator

const e = 3, d = 'hello';

// not equal operator
console.log(a != 2); // true
console.log(b != 'Hello'); // true

/****************************************************************** */

// Strict Equal to Operator

const x = 2;

// strict equal operator
console.log(a === 2); // true
console.log(a === '2'); // false


/************************************************************************ */
// Strict Not Equal to Operator

const y = 2, z = 'hello';

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true