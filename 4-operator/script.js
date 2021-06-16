const currentYear = 2021;
const myAge = currentYear - 1991;
const yourAge = currentYear - 1999;
console.log(myAge, yourAge);
console.log(myAge * 2 + 1, yourAge / 2, 2 ** 3 );



///Variable Concatenation
 const firstName = "Achiever";
 const lastName = "Groups";
 console.log(firstName + ' ' + lastName);
// Template Literals is better way of doing. Will do it later.

//Assignment Operator
 let a = 2 + 3;
a += 10; //a = a + 10;
a *= 10; //a = a * 10;
a++; //a = a + 1;
a--; //a = a - 1;
console.log(a);
//note space in between.

//Comparison Operator
console.log(myAge > yourAge);
// >, <, >=, <=
console.log(myAge <= 25); 

const checkAge = currentYear - 1991 >= currentYear - 1999;
console.log(checkAge);



//assignment operators some imp rule
//Operator  	Example     	Same As
 //   =	         x = y	         x = y
//  +=	         x += y          x = x + y
//  -=      	 x -= y	         x = x - y
//  *=	         x *= y	         x = x * y
//  /=	         x /= y	         x = x / y
//  %=	         x %= y	         x = x % y
//  <<=	         x <<= y	     x = x << y
//  >>=	         x >>= y	     x = x >> y
//  >>>=	     x >>>= y	     x = x >>> y
//  &=	         x &= y	         x = x & y
//  ^=	         x ^= y	         x = x ^ y
//  |=	         x |= y	         x = x | y
// **=	         x **= y	     x = x ** y

let x=1;
x ** = 3;
