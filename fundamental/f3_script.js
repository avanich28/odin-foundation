'use strict';

// - Fundamental Part 3 -

// Unit: Functions

// - MDN -
// Topic: Functions - reusable blocks of code

// 1 Functions versus methods

// Functions that are part of objects are called 'methods'.

// Functions defined in your code, not inside the browser are called 'custom functions'.

// Math.random() => 0, 1

// 2 Invoking functions

myFunction();
function myFunction() {
  console.log('hello');
}
myFunction();

// Function declaration is always hoisted, so it can be called above function definition.

// 3 Function parameters

// Functions require parameters when it was invoked.

// Note: Parameters are sometimes called arguments, properties, or even attributes.

// 3.1 Optional parameters

// Sometimes parameters are optional. We don't have to specify them. If we don't, the function will generally adopt default behavior.

const myArr = ['I', 'miss', 'you'];
const str = myArr.join(' ');
const str2 = myArr.join(); // default
console.log(str, `\n${str2}`);

// 3.2 Default parameters

// If you want to support optional parameters, you can specify default values by adding - after the name of parameter, followed by the default value.

function hello(name = 'Chris') {
  console.log(`Hello ${name}!`);
}
hello('Ari'); // Hello Ari!
hello(); // Hello Chris!

// 4 Anonymous functions and arrow functions

(function () {
  console.log('hello');
});

// It called anonymous function because it has no name. (This form also known as function expression which is not hoisted.)

// We will see anonymous functions when a function expects to receive another function as a parameter.

// 4.1 Anonymous function example

// When the users presses a key, the browser will call the function you provided, and will pass it parameter containing information about this event.

const textBox = document.querySelector('.text');

function logKey(event) {
  console.log(event);
  // KeyboardEvent {isTrusted: true, key: 'j', code: 'KeyJ', location: 0, ctrlKey: false, …}s
  console.log(`You pressed "${event.key}"`);
}
textBox.addEventListener('keydown', logKey);

// Can also pass in addEventListener function
textBox.addEventListener('keydown', function (event) {
  console.log(`You pressed "${event.key}"`);
});

// 4.2 Arrow functions

// Can omit {} if have only one line

const output = document.querySelector('.output');

textBox.addEventListener(
  'keydown',
  event => (output.textContent = `You pressed "${event.key}"`)
);

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled);

// 5 Function scope and conflicts

// The top level outside all your functions is called the global scope.

// 5.1 Playing with scope

let x = 1;

function a() {
  const y = 2;
  x = 2;
  output2(y); // call 2nd
}

function b() {
  const z = 3;
  output2(z); // call 3rd
}

function output2(value) {
  const para = document.createElement('p');
  para.textContent = `Value: ${value}`;
  document.body.appendChild(para);
}

// show in browser
output2(x); // call 1st
// output2(y); // cannot call bcs y is in function scope
a();
b();
console.log(x); // 2

///////////////////////////

// - MDN -
// Topic: Function return values

// 1 Active learning: our own return value function

const squared = function (num) {
  return num * num;
};

const cubed = function (num) {
  return num * num * num;
};

const factorial = function (num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1; // 5 - 1 = 4
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
};

const input3 = document.querySelector('.inputTest');
const para2 = document.querySelector('.p2');

input3.addEventListener('change', () => {
  const num = parseFloat(input3.value);
  if (isNaN(num)) {
    para2.textContent = 'You need to enter a number!';
  } else {
    para2.textContent = `${num} squared is ${squared(num)}. `;
    para2.textContent += `${num} cubed is ${cubed(num)}. `;
    para2.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});

// - odin -

function favoriteAnimal(animal) {
  return animal + ' is my favorite animal!';
}
console.log(favoriteAnimal('Goat'));

// Parameters are the items listed between the parentheses in the function declaration.

// Functions arguments are the actual values we decide to pass to the function.

// animal is a 'placeholder' for some future value!

///////////////////////////

// - Javascript Info -

// Topic: Functions

// 1 Function Declaration
const name = 'Huck';
function showMessage(name) {
  console.log(`Hello ${name}`);
}

// call func
showMessage(name);
showMessage('Bruno');

// 2 Local variables

// A variable declared inside a function is only visible inside that function. (let message)

function showMessage2() {
  let message = "Hello, I'm Javascript!";
  console.log(message);
}
showMessage2();

// 3 Outer variables

// A function can access an outer variable as well.

let userName = 'John';

function showMessage3() {
  // The function has full access to the outer variable. It can modify it as well.

  // userName = 'Bob'; // (1)

  // The outer variable is only used if there's no local one.
  // If a same-named variable is declared inside the function then it shadows the outer one. For example, the function uses the local userName. The outer one is ignored.
  let userName = 'Pietro'; // (2)

  let message = 'Hello, ' + userName;
  console.log(message);
}
showMessage3();
console.log(userName); // Bob (1), John (2)

// Global variable is declared outside of any function. It is visible from any function (unless shadowed by locals)

// 4 Parameters

// We can pass arbitrary data to functions using parameters.

function showMessage4(from, text) {
  console.log(from + ': ' + text);

  // The function modified a local copy.
  from = '*' + from + '*';
  console.log(from);
}
showMessage4('Ann', 'Hello!');
showMessage4('Ann', "What's up?");

// Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

// 5 Default values

// If the function is called, but an argument is not provided, then the corresponding value becomes undefined.

showMessage4('Ann'); // Ann: undefined

// We can specify the so-called 'default' (to use if omitted) value for a parameter in the function, using =.

function showMessage5(from, text = 'no text given') {
  console.log(from + ': ' + text);
}
showMessage5('Hui');
// The default value also jumps in if the parameter exists, but strictly equals undefined.
showMessage5('Pom', undefined);

// The default value can be more complex.
function showMessageComplex(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// In old JS, use || operator instead operator.
function showMessageOld(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  // ...
}

// Using ?? nullish coalescing operator is better than || because it considers 0 and '' as a normal value, not falsy values.

function showCount(count) {
  // if count is undefined or null, show "unknown"
  console.log(count ?? 'unknown');
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// 6 Returning a value

// A function can return a value back into the calling code as the result.

// return can be in any place of the function. When the execution reaches it, the function stops.

// It is possible to use return without a value. That causes the function to exit immediately.

function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
console.log(result);

// A function with an empty return or without return undefined! 😆

function doNothing() {
  /* empty */
}
console.log(doNothing() === undefined); // true

function doNothing2() {
  return;
}
console.log(doNothing() === undefined); // true

// Never add a newline btw return and the value 😆
/*
return
 (some + long + expression + or + whatever * f(a) + f(b))
*/
/*
return;
 (some + long + expression + or + whatever * f(a) + f(b))
 */

// If we want the returned expression to wrap across multiple lines, we should start at the same line or put ().
/*
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
*/

// 7 Naming a function 😆

// Functions are actions. So their name is usually a verb!

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false

// Functions == Comments

// Functions should be short and do exactly one thing.

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue; // false
    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log(isPrime(13)); // true
showPrimes(13);

// Task #1
// Function can still work when else is removed.

// Task #2

// 1
const checkAge = age =>
  age > 18 ? true : console.log('Did parents allow you?');
checkAge(15);

// 2
const checkAge2 = age => age > 18 || console.log('Did parents allow you?');
checkAge2(15);

// Task #3
const getMin = function (num1, num2) {
  // return Math.min(num1, num2);
  return num1 < num2 ? num1 : num2;
};
console.log(getMin(2, 5)); // 2
console.log(getMin(3, -1)); // -1
console.log(getMin(1, 1)); // 1

// Task #4
const calcPow = function (n, pow) {
  const multiple = n;
  if (n > 1) {
    for (let i = 1; i < pow; i++) {
      n *= multiple;
    }
    return n;
  } else if (n < 1) {
    return `Power ${n} is not supported, use a positive integer.`;
  }
};
console.log(calcPow(0, 100)); // 9

////////////////////////////

// - Javascript Info -

// Topic: Functions expressions

// A function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.

// 1 Function is a value

function sayHi() {
  console.log('Hello');
}
console.log(sayHi); // func

// Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

// In Javascript, a function is a value.

// We can copy  function to another variable.
let func = sayHi; // If it was sayHi(), then it would write the result call sayHi(), not the function sayHi itself.

func(); // Hello
sayHi(); // Hello

// Why is there a semicolon at the end?
function a() {
  // ...
}

let c = function () {
  // ...
}; // 😆

// Function expression is inside the assignment statement while ; is not a part of the function syntax.

// 2 Callback function

function ask(question, yes, no) {
  // OK-true cancel-false
  // if (confirm(question))
  if ((question = true)) yes();
  else no();
}

function showOk() {
  console.log('You agreed');
}

function showCancel() {
  console.log('You canceled the execution');
}

ask('Do you agree?', showOk, showCancel);
// showOk and showCancel of ask are called callback functions or callbacks!

// The idea is that we pass a function and expect it to be 'called back' later if necessary.

// We can use Function expression to write an equivalent, shorter function

function ask2(question, yes, no) {
  if ((question = true)) yes();
  else no();
}

ask2(
  'Do you agree?',
  function () {
    console.log('You agreed');
  },
  function () {
    console.log('You canceled');
  }
);
// functions are declared right inside the ask call. They have no name and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables) 😆

// A function is a value representing an 'action'
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

// เพิ่มเติมจ้า
// expression is a valid of code that resolves to a value. There are 2 types:
// 1. expression that have side effects such as =
// 2. purely evaluate 3 + 4

// 3 Function Expression vs Function Declaration

// Function Declaration: a function, declared as a separate statement, in the main code flow.

function sum2(a, b) {
  return a + b;
}

// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

let sum3 = function (a, b) {
  return a + b;
};

// Note: A Function Expression is created when the execution reaches it and is usable only from that moment.

// 😆
// Note: A Function Declaration can be called earlier than it is defined.

// For example, a global Function Declaration is visible in the whole script, no matter where it is.

// That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

// And after all Function Declarations are processed, the code is executed. So it has access to these functions. For example:

sayHi2('John'); // can call earlier
function sayHi2(name) {
  console.log(`Hello, ${name}`);
}

// Function Expressions are created when the execution reaches them.
// sayHi3('John'); // Error
let sayHi3 = function (name) {
  // (*) no magic any more
  alert(`Hello, ${name}`);
};

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// Example 1
let age = 30;
if (age < 18) {
  function welcome() {
    console.log('Hello');
  }
} else {
  function welcome() {
    console.log('Greetings!');
  }
}
// welcome(); // error 😆

// That’s because a Function Declaration is only visible inside the code block in which it resides. => Example 2

// Example 2
age = 16;
if (age < 18) {
  // if block scope
  welcome(); // runs
  function welcome() {
    console.log('Hello!');
  }
  welcome(); // runs
} else {
  function welcome() {
    console.log('Greetings!');
  }
  welcome();
}
// welcome(); // error

// Example 3 😆

// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

age = 18;
let welcome; // we can reach now

if (age < 18) {
  welcome = function () {
    console.log('Hello!');
  };
} else {
  welcome = function () {
    console.log('Greetings!');
  };
}
welcome(); // ok now

// Example 4
let welcome2 =
  age < 18
    ? function () {
        console.log('Ni hao!');
      }
    : function () {
        console.log('Hola!');
      };
welcome2();

// Functions are values. They can be assigned, copied or declared in any place of the code.

// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.

// Function Expressions are created when the execution flow reaches them.

///////////////////////////

// - Javascript Info -

// Topic: Arrow functions, the basics

// 1
/*
let func = function(arg1, arg2, ..., argN) {
    return expression;
  };
*/

/* 😆
let func = (arg1, arg2, ..., argN) => expression;
*/

let sum4 = (a, b) => a + b;
console.log(sum4(1, 2));

// no () for 1 argument
let double = n => n * 2;
console.log(double(3));

// If there are no argument, () are empty.
let sayBye = () => console.log('Good night');
sayBye();

// Arrow functions can be used in the same way as Function Expressions.

age = 60;
let welcome3 =
  age < 18 ? () => console.log('Hola') : () => console.log('Gracias');
welcome3();

// 2 Multiline arrow functions

let sum5 = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result;
  // if we use curly braces, then we need an explicit "return"
};
console.log(sum5(1, 2));

// Task #1
const askYou = (question, yes, no) => (question = true ? yes() : no());

askYou(
  'Do you agree?',
  () => console.log('You agreed'),
  () => console.log('You canceled')
);

///////////////////////

// - Javascript Tutorial -

// Topic: Javascript Call Stack

// JavaScript engine uses a call stack to manage execution contexts.

// The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.

// Recursive function without stop condition => It will occur stack overflow.

///////////////////////////

// - The Odin Project -

// Topic: Assignment

// 1
function add7(num) {
  return num + 7;
}
add7(8);

// 2
const multiply = function (num1, num2) {
  return num1 * num2;
};
multiply(2, 4);

// 3
const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();
console.log(capitalize('jAVASCRIPT!'));

// 4
const lastLetter = word => word.slice(-1);
console.log(lastLetter('abcd')); // d

// Another essential concept in coding is functions, which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times.

// Return values are just what they sound like — the values that a function returns when it completes.
