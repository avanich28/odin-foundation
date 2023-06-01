'use strict';

// 1 Reference Error
// console.log(x);
// Uncaught ReferenceError: Cannot access 'x' before initialization
let a = 'Hello';
let b = 'World';
let x = 1;
// console.log(c);
// UE_script.js:5 Uncaught ReferenceError: c is not defined

// 2
a = 5;
b = 10;
/*
function add() {
  return c;
}

function print() {
  add();
}

print();
*/
// Uncaught ReferenceError: c is not defined

// MyTest
function c(a) {
  function d() {
    return a + 10;
  }
  return d();
}
console.log(c(2));
// d(); // UE_script.js:33 Uncaught ReferenceError: d is not defined

// 3 Syntax Error
function helloWorld() {
  // console.log 'Hello World!'
}
// Uncaught SyntaxError: Unexpected string => no ()

// 4 Type Error
const str1 = 'Hello';
const str2 = 'World!';
// const message = str1.push(str2);
// Uncaught TypeError: str1.push is not a function => concat() ✅

///////////////////////////

// - W3 -

// 1 The assert() method writes a message to the console if an expression evaluates to false.

// console.assert(expression, message)
x = 5;
let y = 5;
// console.assert(x + y == 11, 'Expression returned "false"');

// 2 The clear() method clears the console.

// The clear() method also write "Console was cleared" in the console.
console.clear();

// 3 The count() method counts the number of times console.count() is called.

// The count() method this number to the console.

for (let i = 0; i < 5; i++) {
  console.count();
}
// default: 1
// default: 2
// ...

for (let i = 0; i < 5; i++) {
  console.count('myLabel');
}
// myLabel: 1
// myLabel: 2
// ...
// You can add a label that will be included in the console view.

for (let i = 0; i < 5; i++) {
  console.count(''); // remove label
}
// 1
// 2
// ...

// 4 The error() method writes an error message to the console.

// console.error(message)

console.error('You made a mistake');

const myObj = { firstName: 'John', lastName: 'Doe' };
console.error(myObj);

const myArr = ['Orange', 'Banana', 'Mango', 'Kiwi'];
console.error(myArr);

// 5 The group() method starts a message group.

// console.group(label)

console.log('Hello World!');
console.group();
console.log('Hello again, this time inside a group!');

// console.groupEnd()
console.groupEnd();
console.log('and we are back.');

// console.groupCollapsed();
console.log('Hello World!');
console.groupCollapsed();
console.log('Hello again, this time inside a collapsed group!');
console.groupEnd();

// 6 The info() method writes a message to the console.
console.info('Hello world!');

console.info(myObj);
console.info(myArr);

// 7 The log() method writes (logs) a message to the console.

// The log() method is useful for testing purposes.

// console.log(message)

console.log(myObj);
console.log(myArr);

// 8 The table() method writes a table to the console.

// You can sort the table by clicking the column names.

// console.table(tabledata, tablecolumns)

console.table(['Audi', 'Volvo', 'Ford']);

console.table({ firstname: 'John', lastname: 'Doe' });

const car1 = { name: 'Audi', model: 'A4' };
const car2 = { name: 'Volvo', model: 'XC90' };
const car3 = { name: 'Ford', model: 'Fusion' };

console.table([car1, car2, car3]);
console.table([car1, car2, car3], ['model']);

const test = {
  result: function () {
    return 'Yeah!';
  },
};
console.log(test.result());

// 9 The time() method starts a timer in the console view.

// The time() method allows you to time code for testing purposes.

// console.time(label)

// The time it takes to run a for-loop 100.000 times:
console.time(); // default: 3.4638671875 ms
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();

// 10 The timeEnd() method ends a timer, and writes the result to the console.
console.time('test1'); // test1: 2.075927734375 ms
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd('test1');

let i = 0;
console.time('while loop'); // while loop: 2.053955078125 ms
while (i < 100000) {
  i++;
}
console.timeEnd('while loop');

// 11 The trace() method displays a trace that show how the code ended up at a certain point.

function myFunction() {
  myOtherFunction();
}

function myOtherFunction() {
  console.trace();
}
myFunction();

// UE_script.js:56 console.trace
// myOtherFunction @ UE_script.js:56
// myFunction @ UE_script.js:52
// (anonymous) @ UE_script.js:58

// 12 The warn() method writes a warning to the console.

// console.warn(message)

console.warn('This is a warning!');
