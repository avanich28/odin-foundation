'use strict';

// Unit: Fundamental Part 1

// - Javascript Info -
// Topic: A variable
let message;
message = 'Hello';

let message2 = 'Hello';
// alert(message2);

let user = 'John',
  age = '25',
  message3 = 'Hello';

let user2 = 'John';
let age2 = 25;
let message4 = 'Hello';

let message5;
message5 = 'Hello!';
message5 = 'World!';

// alert(message5);

let hello = 'Hello world!';
let message6;

message6 = hello;

// alert(hello); // Hello World!
// alert(message6); // Hello World!

// A repeated declaration of the same variable is an error
let message7 = 'This';
// let message7 = "That"; // SyntaxError: Identifier 'message7' has already been declared

let $ = 1;
let _ = 2;
console.log($ + _);

// Not valid
// let 1a;
// let my-name;

// Diff
// apply vs APPLE

// Reserved names
// let class return function
// let let = 5; // Error!

// An assignment without 'use strict'
// note: no 'use strict'
// num = 5; // the var 'num' is created if it didn't exist
// alert(num); // 5

// 'use strict';
// num = 5 // error: num is not defined

// Topic: Constants
// To declare a constant(unchanging) variable, use const instead of let
const myBirthday = '18.04.1982';
// myBirthday = "01.01.2001"; // error, can't reassign the constant!

// Uppercase constants
// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';

// when we need to pick a color
let color = COLOR_ORANGE;
// alert(color);

// There are also constants that are calculated in run-time, during the execution, but do not change after their initial assignment.
// const pageLoadTime = /* time taken by a webpage to load */;

// Topic: Name things right
// Use human-readable names like userName or shoppingCart.

// Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.

// Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.

// Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.

// Tasks #1
let admin, name; // can declare 2 var at once
name = 'John';
admin = name;
// alert(admin);

// Tasks #2
let ourPlanetName = 'Earth';
let currentUserName = 'John';

// Tasks #3
const BIRTHDAY = '18.04.1982';
// const ageA = someCode(BIRTHDAY);

// - W3 -
// Topic: Numbers

// Operations = Operand-Operator-Operand
// 100 + 50

// modulus operator
let x = 5;
let y = 2;
let z = x % y; // 2

// exponential
let xx = 5;
console.log(Math.pow(xx, 2));

// Operator Precedence
// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

// When using parentheses, the operations inside the parentheses are computed first.

// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right.

// - MDN -
// Topic: Numbers
const myInt = 5;
const myFLoat = 6.667;
console.log(typeof myInt); // number
console.log(typeof myFLoat); // number

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = '74';
myNumber += 3;
console.log(typeof myNumber, myNumber); // string 743 🧐

myNumber = '74';
myNumber = Number(myNumber) + 3;
console.log(typeof myNumber, myNumber); // number 77

let num1 = 10;
let num2 = 50;
console.log(9 * num1);
console.log(num1 ** 3);
console.log(num2 / num1);
console.log(5 + 10 * 3); // 35
console.log((num2 % 9) * num1); // 50
console.log(num2 + num1 / 8 + 2); // 53.25

// Operator Precedence
console.log((num2 + num1) / (8 + 2)); // 6

// Increment and decrement operators
// cannot apply
// 3++;

// can apply
num1 = 4;
console.log(num1++); // 4 browser return current value!
console.log(num1); // 5

num2 = 6;
console.log(num2--); // 6
console.log(num2); // 5

// prefixed syntax
num1 = 4;
console.log(++num1); // 5

num2 = 6;
console.log(--num2); // 5

// Assignment Operators
let x1 = 3;
let y1 = 4;
x1 = y1;
console.log(x1, y1); // 4 4
console.log((x1 *= y1)); // 16

// - Javascript Info -
// Topic: Basic Operators, maths

// An operand – is what operators are applied to.

// An operator is unary if it has a single operand.
x = 1;
x = -x;
// alert(x); // -1, unary negation was applied

// An operator is binary if it has two operands.
(x = 1), (y = 3);
// alert(y - x); // 2, binary minus subtracts values

// The negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

// Topic: String Concatenation with Binary +
let s = 'my' + 'string';
console.log(s); // mystring

// if any operands is a string, then the other one is converted to a string too.
console.log('1' + 2); // 12
console.log(2 + '1'); // 21

console.log(2 + 2 + '1'); // 41
// If the first operand is a string, the complier treats the other two operands as strings too.
console.log('1' + 2 + 2); // 122

// The binary + is the only operator supports strings in such a way. Other arithmetic operators work only with number and always convert their operands to numbers. 😆
console.log(6 - '2'); // 4
console.log('6' / '2'); // 3

// Topic: Numeric Conversion, unary +
// The unary plus applied to a single value, doesn't do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers!!
// Just only convert var to a num
x = 1;
console.log(+x); // 1

y = -2;
console.log(+y); // -2

console.log(+true); // 1
console.log(+''); // 0

// The unary plus + actually does the same thing as Number(...), but is shorter.

// For example, if we are getting vales from HTML form fields, they are usually strings.

// The binary plus would add them as strings.
let apples = '2';
let oranges = '3';
console.log(apples + oranges); // 23

// Need to convert to number
console.log(+apples + +oranges); // 5
console.log(Number(apples) + Number(oranges)); // 5

// Topic: Operator Precedence

// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

// If the precedence is the same, the execution order is from left to right.

// unary plus: precedence = 14
// addition: precedence = 11

// Assignment (= is also operator 😊)
// assignment: precedence = 2
// That's why the calculation is done first and the = is evaluated.
x = 2 * 2 + 1;
console.log(x); // 5

// Assignment = returns a value
let a = 1;
let b = 2;

// Funny code
let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

// Chaining Assignment
// Chained assignment evaluate from right to left.
// let a, b, c
a = b = c = 2 + 2;
console.log(a, b, c); // 4 4 4

c = 2 + 2;
b = c;
a = c;

// Topic: Modify-in-place
// Apply an operator to a variable and store the new result in that same variable
let n = 2;
n = n + 5;
n = n * 2;

// Shortened by using += and *=
n = 2;
n += 5;
n *= 2;

console.log(n); // 14

// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

// Such operators have the same precedence as a normal assignment, so they run after most other calculations:
n = 2;
n *= 3 + 5;
console.log(n); // 16

// Topic: Incremental/Decremental
// Increment ++ increases a variable by 1:
let counter = 2;
counter++;
console.log(counter); // 3

// Decrease -- decreases a variable by 1:
counter = 2;
counter--;
console.log(counter); // 1

// cannot use ++/-- on a value
// console.log(5++); // Error! ⛔️

// postfix form: counter++
// prefix form: ++counter
// The prefix form returns the new value while the postfix form returns the old value.
counter = 1;
a = ++counter;
console.log(a); // 2

counter = 1;
a = counter++;
console.log(a); // 1

// no diff in which form to use
counter = 0;
counter++;
++counter;
console.log(counter); // 2

// need the result
counter = 0;
console.log(++counter); // 1

// need previous value
counter = 0;
console.log(counter++); // 0

// Increment/decrement among other operators
// The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
counter = 1;
console.log(2 * ++counter); // 4

counter = 1;
console.log(2 * counter++); // 2, because counter++ return the 'old' value.

// In real world, use 'one-line - one action'
counter = 1;
console.log(2 * counter);
counter++;

// Topic: Comma
// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
a = (1 + 2, 3 + 4);
console.log(a); // 7 (the result of 3 + 4)

// Comma has very low precedence, lower than =, so parentheses are important in the example above!
(a = 1 + 2), 3 + 4;
console.log(a); // 3

// Why do we need an operator that throws away everything except the last expression?
// three operations in one line
// for(a = 1, b = 3, c = a * b; a < 10; a++) {
//     ...
// }

// Task #1
(a = 1), (b = 1);
c = ++a; // 2
let d = b++; // 1
console.log(c, d, a, b); // 2 1 2 2

// Task #2
a = 2;
x = 1 + (a *= 2);
console.log(x, a); // 5 4

// Task #3
// "" + 1 + 0 => '10' (str)
// "" - 1 + 0 => -1 (num) ❌
// true + false => 1 (num)(1 + 0 = 1)
// 6 / "3" => 2 (num)
// "2" * "3" => 6 (num)
// 4 + 5 + "px" => '9px' (str)
// "$" + 4 + 5 => '$45' (str)
// "4" - 2 => 2 (num)
// "4px" - 2 => Nan
// "  -9  " + 5 => '  -9  5' (str) ❌
// "  -9  " - 5 => -14 (num)
// null + 1 => 1 (num)
// undefined + 1 => Nan
// " \t \n" - 2 => -2 (num) ❌

// Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

// Be careful! that prompt returns input as a string.
// a = +prompt("First number?", 1);
// b = +prompt("Second number?", 2);

// console.log(a + b); // 3
