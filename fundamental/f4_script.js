'use strict';

// Unit: Arrays

// - W3 -
// Topic: Javascript Arrays

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// 1 Creating Array
// You can create an array, and then provide the element.
const cars = [];
cars[0] = 'Saab';
cars[1] = 'Volvo';
cars[2] = 'BMW';
console.log(cars);

// 2 Using the Javascript Keyword new
const cars2 = new Array('Saab', 'Volvo', 'BMW');
console.log(cars2);

// 3 Accessing Array Elements
const cars3 = ['Saab', 'Volvo', 'BMW'];
let car = cars3[0];
console.log(car);

// Array indexes start with 0.
// [0] is the first element. [1] is the second element.

// 4 Changing an Array Element
cars3[0] = 'Opel';
console.log(cars3);

// 5 Access the Full Array
document.getElementById('demo').innerHTML = cars3;

// 6 Arrays are Objects

// Arrays use numbers to access its "elements".
const person = ['John', 'Doe', 46];
console.log(person[0]);

// Objects use names to access its "members".
const person2 = { firstName: 'John', lastName: 'Doe', age: 46 };
console.log(person2.firstName);

// 7 Array Elements Can Be Objects

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

const myArray = [];
const myFunction = function () {
  return 'hello';
};
myArray[0] = Date.now();
myArray[1] = myFunction();
myArray[2] = cars3;
console.log(myArray);

// 8 Array Properties and Methods
console.log(cars3.length);
console.log(cars.sort());

// 9 The length Property
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.length);

// 10 Accessing the First Array Element
console.log(fruits[0]);

// 11 Accessing the Last Array Element
console.log(fruits[fruits.length - 1]);

// 12 Looping Array Elements
let text = '<ul>';
for (let i = 0; i < fruits.length; i++) {
  text += '<li>' + fruits[i] + '</li>';
}
text += '</ul>';

document.getElementById('demo2').innerHTML = text;

// You can also use the Array.forEach() function:
let text2 = '<ul>';
fruits.forEach(value => (text2 += '<li>' + value + '</li>'));
text += '</ul>';

document.getElementById('demo3').innerHTML = text2;

// 13 Adding Array Elements

// push()
fruits.push('Lemon');

// length
fruits[fruits.length] = 'Grape';

// WARNING! Adding elements with high indexes can create undefined "holes" in an array: 😆
console.log(fruits.length); // 6
let text3 = '';
fruits[10] = 'Durian';
for (let i = 0; i < fruits.length; i++) {
  text3 += fruits[i] + '<br>';
}
document.getElementById('demo4').innerHTML = text3;

// 14 Associative Arrays

// Many programming languages support arrays with named indexes. Arrays with named indexes are called associative arrays (or hashes).

// JavaScript does not support arrays with named indexes.

// In JavaScript, arrays always use numbered indexes.

const person3 = [];
person3[0] = 'John';
person3[1] = 'Doe';
person3[2] = 46;
console.log(person3.length);
console.log(person3[0]);

// Warning! If you use named indexes, JS will redefine the array to an object. After that, some array methods and properties will produce incorrect results. 😆
const person4 = [];
person4['firstName'] = 'John';
person4['lastName'] = 'Doe';
person4['age'] = 46;
console.log(person4.length); // 0
console.log(person4[0]); // undefined

// 15 The Difference Between Arrays and Objects

// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.

// 16 When to Use Arrays. When to use Objects.

// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// 17 Javascript new Array()

// JavaScript has a built-in array constructor new Array().

const points1 = new Array();
const points2 = [];

const points3 = new Array(40, 100, 1, 5, 25, 10);
console.log(points3);

// A common Error 😆
const points4 = [40];

// Create an array with 40 undefined elements 😆
const points5 = new Array(40);

console.log(points4, points5);

// 18 How to Recognize an Array

// The typeof operator returns object because a JavaScript array is an object.
console.log(typeof fruits); // object

// Sol 1
console.log(Array.isArray(fruits)); // true

// Sol 2
// The instanceof operator returns true if an object is created by a given constructor:
console.log(fruits instanceof Array); // true

// - W3 -
// Topic: Javascript Arrays Methods

// 1 Converting Arrays to Strings

const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits2.toString());
document.getElementById('demo5').innerHTML = fruits2.toString();

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
console.log(fruits2.join('🐶'));
document.getElementById('demo6').innerHTML = fruits2.join('*');

// 2 Popping and Pushing

// Popping items out of an array, or pushing items into an array.
console.log(fruits2.pop()); // Mango
console.log(fruits2);

// 3 Javascript Array push()

// push() returns the new array length.
console.log(fruits2.push('Kiwi'));
console.log(fruits2);

// 4 Shifting Element

// Shifting is equivalent to popping, but working on the first element instead of the last.

// 5 Javascript Array shift()

// The shift() method removes the first array element and "shifts" all other elements to a lower index.

// The shift() method returns the value that was "shifted out":
console.log(fruits2.shift()); // Banana

// 6 Javascript Array unshift()

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// The unshift() method returns the new array length:

console.log(fruits2.unshift('Lemon')); // 4

// 7 Changing Elements
fruits2[0] = 'Kiwi';

// 8 Javascript Array length
fruits2[fruits2.length] = 'kiwi2';
console.log(fruits2);

// Warning! Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.
console.log(delete fruits2[0]); // true
console.log(fruits2); // [empty, 'Orange', 'Apple', 'Kiwi', 'kiwi2']

// 9 Merging (Concatenating) Arrays
const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];

console.log(myGirls.concat(myBoys));
// The concat() method does not change the existing arrays. It always returns a new array.

const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const arr3 = ['Robin', 'Morgan'];
console.log(arr1.concat(arr2, arr3));

// The concat() method can also take strings as arguments:
const arr4 = ['Emil', 'Tobias', 'Linus'];
console.log(arr4.concat('Peter'));

// 10 Flattening an Array

// Flattening an array is the process of reducing the dimensionality of an array.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat());

// 11 Splicing and Slicing Arrays

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

// 12 Javascript Array splice() 😆

let fruits3 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits3.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits3);
// ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

// 1st parameter (2) defines the position where new el should be added.
// 2nd parameter (0) defines how many el should be removed.
// The rest parameters define the new elements to be added.

fruits3 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits3.splice(2, 2, 'Lemon', 'Kiwi');
console.log(fruits3);

// 13 Using splice() to Remove Elements

fruits3.splice(0, 1);
console.log(fruits3);

fruits3.splice(1);
console.log(fruits3);

// 14 Javascript Array slice()

// The slice() method slices out a piece of an array into a new array.

fruits3 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits3.slice(1);
console.log(citrus);

// Note!
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
const citrus2 = fruits3.slice(1, 3);
console.log(citrus2); // not including the end argument

// 15 Automatic toString()

// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

// like Demo5 😆
document.getElementById('demo7').innerHTML = fruits3;
// In browser => Banana,Orange,Lemon,Apple,Mango

//////////////////////////

// Units: Loops

// - MDN -
// Topic: Looping code

// 1 Looping through a collection

// 1.1 The for...of loop

let cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}

// 1.2 map() and filter()

// map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.
const upperCats = cats.map(string => string.toUpperCase());

console.log(upperCats); // ['LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION']

// filter() creates a collection containing only items that matches.

const filtered = cats.filter(string => string.startsWith('L'));

console.log(filtered); //  ['Leopard', 'Lion']

// Note that map() and filter() are both often used with function expressions.

// 2 The standard for loop

// syntax
/*
for (initializer (or counter var); condition; final - expression) {
  // code to run
}
*/

// Calculate square
const results = document.querySelector('#results');

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    // console.log(newResult);
    results.textContent += `${newResult}\n`;
  }
  results.textContent += `\nFinished`;
}

const calcBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calcBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => (results.textContent = ''));

// Looping through collections with a for loop
cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// Sometimes you still need to use a for loop instead of for...of.
cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavouriteCats = 'My cats are called ';

for (const cat of cats) {
  myFavouriteCats += `${cat}, `;
}
console.log(myFavouriteCats);
// My cats are called Pete, Biggles, Jasmine,

// Solve the unwell-formed at the above by using for loop.

myFavouriteCats = 'My cats are called ';

for (let i = 0; i < cats.length; i++) {
  if (i < cats.length - 1) {
    myFavouriteCats += `${cats[i]}, `;
  } else {
    myFavouriteCats += `and ${cats[i]}.`;
  }
}
console.log(myFavouriteCats);
// My cats are called Pete, Biggles, and Jasmine.

// 3 Exiting loops with break

// If you want to exit a loop before all the iterations have been completed, you can use the break statement.

const contacts = [
  'Chris:2232322',
  'Sarah:3453456',
  'Bill:7654322',
  'Mary:9998769',
  'Dianne:9384975',
];

const para = document.querySelector('#p');
const input = document.querySelector('.SS');
const btn = document.querySelector('#buttonSearch');

btn.addEventListener('click', () => {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  para.textContent = '';

  for (const contact of contacts) {
    const splitContact = contact.split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
    if (para.textContent === '') {
      para.textContent = 'Contact not found.';
    }
  }
});

// 4 Skipping iterations with continue

// The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.

const para2 = document.querySelector('#p2');
const input2 = document.querySelector('.NN');
const btn2 = document.querySelector('#buttonNumber');

btn2.addEventListener('click', () => {
  para2.textContent = 'Output: ';
  const num = input2.value;
  input2.value = '';
  input2.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para2.textContent += `${i} `;
  }
});

// 5 while and do...while

// 5.1 while loop
/*
initializer
while (condition) {
  // code to run

  final-expression
}
*/
cats = ['Pete', 'Biggles', 'Jasmine'];
myFavouriteCats = 'My cats are called ';

let i = 0;
while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavouriteCats += `and ${cats[i]}.`;
  } else {
    myFavouriteCats += `${cats[i]}, `;
  }
  i++;
}
console.log(myFavouriteCats);

// 5.2 do...while
/*
initializer
do {
  // code to run

  final-expression
} while (condition)
*/
// The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed at least once.

cats = ['Pete', 'Biggles', 'Jasmine'];
myFavouriteCats = 'My cats are called ';

i = 0;
do {
  if (i === cats.length - 1) {
    myFavouriteCats += `and ${cats[i]}.`;
  } else {
    myFavouriteCats += `${cats[i]}, `;
  }
  i++;
} while (i < cats.length);
console.log(myFavouriteCats);

// - Javascript Info -
// Topic: Loops: while and for

// 1 The 'while' loop
/*
while (condition) {
  // code
  // so-called "loop body"
}
*/
i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.
i = 3;
while (i) {
  // when i becomes 0, the condition becomes falsy, and the loop stops.
  console.log(i);
  i--;
}

// Curly braces are not required for a single-line body
i = 3;
while (i) console.log(i--);

// 2 The 'do...while' loop
/*
do {
  // loop body
} while (condition);
*/

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

i = 0;
do {
  console.log(i);
  i++;
} while (i < 0);
// This form of syntax should only be used when you want the body of the loop tp execute at least once regardless of the condition being truthy.

// 3 The 'for' loop
/*
for (begin; condition; step) {
  // ... loop body ...
}
*/
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// The general loop algorithm works like this:
// for (let i = 0; i < 3; i++) alert(i)
// run begin
i = 0;
// if condition → run body and run step
if (i < 3) {
  console.log(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  console.log(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  console.log(i);
  i++;
}
// ...finish, because now i == 3

// 3.1 Inline ariable declaration
// The counter variable i is declared right in the loop. This is called an 'inline' variable declaration.
// for (let i = 0; i < 3; i++)

// Instead of defining a variable, we could use an existing one.
i = 0;
for (i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}
console.log(i); // 3 (visible bcs declared outside of the loop)

// 3.2 Skipping parts

// Omit begin
i = 0;
for (; i < 3; i++) {
  console.log(i);
}

// Remove step
i = 0; // 0 > 1
for (; i < 3; ) {
  console.log(i++); // 0
}

// Remove everything
// create infinite loop
/*
for (;;) {
  // repeat without limits
}
*/

// 4 Breaking the loop
let sum = 0;
while (true) {
  let value = +prompt('Enter a number', '');
  if (!value) break; // 😆
  sum += value;
}
console.log('Sum: ' + sum);

// The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked in the middle or even in several places of its body. 😆

// 5 Continue to the next iteration

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 === 0) continue;
  console.log(i); // 1 3 5 7 9
}

// 5.1 The continue directive helps decrease nesting

// If we use if, it creates one more level if nesting.
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    // i % 2 === 0 (false)
    console.log(i);
  }
}

// 5.2 No break/continue to the right side of ‘?’
/*
(i > 5) ? alert(i) : continue; // Error continue isn't allowed here
*/

// 6 Labels for break/continue 😆

// The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!
/*
labelName: for (...) {
  ...
}
*/
// outer:
// for (let i = 0; i < 3; i++) { ... }

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');

    if (!input) break outer;
  }
}
console.log('Done');

// 6.1 Labels do not allow to “jump” anywhere

/*
break label; // jump to the label below (doesn't work)

label: for (...)
*/
// A break directive must be inside a code block.

// A continue is only possible from inside a loop. 😆

// break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one. 😆

// Task #1
i = 3;
while (i) {
  console.log(i--); // 3 2 1
}

// Task #2
// ++i
i = 0;
while (++i < 5) console.log(i); // 1 2 3 4

// i++
i = 0;
while (i++ < 5) console.log(i); // 1 2 3 4 5 😆

// Task #3
for (let i = 0; i < 5; i++) console.log(i); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) console.log(i); // 0 1 2 3 4

// Task #4
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

// Task #5
i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// Task #6
// ME //
let num = Number(prompt('Please fill number'));

while (num <= 100 && num) {
  num = Number(prompt('Fill number again!'));
}
console.log(num); // 0

// Solution
num;
do {
  num = prompt('Enter a number greater than 100?');
} while (num <= 100 && num);
console.log(num); // null

// Task #7
const isPrime = function (num) {
  nextPrime: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    console.log(i);
  }
};
isPrime(10);

// --------------------

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    // console.log(isPrime2(i));
    if (!isPrime2(i)) continue; // false
    console.log(i);
  }
}

function isPrime2(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log(isPrime2(13)); // true
showPrimes(13);

///////////////////////

// Units: Additional materials from README.md 😆

// - MDN -

// Topic: The arguments object

// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function 😆

// 1
function func1(a, b, c) {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}
func1(1, 2, 3);
// The arguments object is a local variable available within all non-arrow functions.

// 2
// Non-strict functions that only has simple parameters (no rest, default, or destructured parameters) will sync the new value of parameters with the arguments object 😆, and vice versa.

function func(a) {
  arguments[0] = 99;
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99;
  console.log(arguments[0]);
}
func2(10); // 99

// 3
// Non-strict functions that are passed rest, default, or destructured parameters will not sync new values assigned to parameters in the function body with the arguments object.

// Instead, the arguments object will always reflect the values passed to the function when the function was called.
function funcWithDefault(a = 55) {
  arguments[0] = 99;
  console.log(a); // 10
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99;
  console.log(a); // 99
  console.log(arguments[0]); // 10
}
funcWithDefault2(10);

function funcWithDefault3(a = 55) {
  console.log(a); // 55
  console.log(arguments[0]); // undefined
  console.log(arguments.length); // 0
  a = 8;
  console.log(a); // 8
}
funcWithDefault3();

// 4 Arguments is an array-like object

// It means that arguments has a length property and properties indexed from 0, but it doesn't have Array's built-in methods like forEach().

// However, it can be converted to a real Array, using slice(), Array.from(), spread.
/*
const args = Array.prototype.slice.call(arguments);

const args2 = Array.from(arguments);

const args3 = [...arguments];
*/

// Function.prototype.apply()
function midpoint() {
  console.log(arguments); // 😆
  // Arguments(5) [3, 1, 4, 1, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}
console.log(midpoint(3, 1, 4, 1, 5)); // 3

// 5 Defining a function that concatenates several strings 😆
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1); // this
  return args.join(separator);
}

console.log(myConcat(', ', 'red', 'orange', 'blue')); // red, orange, blue

console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah')); // elephant; giraffe; lion; cheetah

// 6 Defining a function that creates HTML lists
function list(type) {
  let html = `<${type}l><li>`; // start

  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join('</li><li>');

  html += `</li><${type}l>`; // end

  // 7 Using typeof with arguments
  console.log(typeof arguments); // object

  console.log(typeof arguments[0]); // string

  return html;
}
console.log(list('u', 'One', 'Two', 'Three')); // <ul><li>One</li><li>Two</li><li>Three</li><ul>

///////////////////////

// - MDN -

// Topic: Rest parameters

// The rest parameter allows a function to accept an indefinite number of arguments as an array.

// 1 Syntax
/*
function f(a, b, ...theArgs) {
  //...
}
*/
function myFun(a, b, ...manyMoreArgs) {
  console.log('a', a);
  console.log('b', b);
  console.log('manyMoreArgs', manyMoreArgs);
}
myFun('one', 'two', 'three', 'four', 'five', 'six');
// a one
// b two
// manyMoreArgs ['three', 'four', 'five', 'six']

// 😆
// Have only 1 rest parameter
// function wrong1(...one, ...wrong) {}

// Rest parameter must be the ;ast parameter in the function!
// function wrong2(...wrong, arg2, arg3) {}

// 2 The diff btw rest parameters and the arguments object

// 2.1
// The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(),...etc can be applied on it directly.

// 2.2
// The arguments object has the additional (deprecated) callee property.

// 2.3
// In a non-strict function with simple parameters, the arguments object syncs its indices with the values of parameters. The rest parameter array never updates its value when the named parameters are re-assigned.

// 2.4
// The rest parameter bundles all the extra parameters into a single array, but does not contain any named argument defined before the ...restParam. The arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.

// 3 More examples
// the 3rd argument isn't provided, but manyMoreArgs is still and array (empty).
myFun('one', 'two');
// a one
// b two
// manyMoreArgs []

myFun('one');
// a one
// b undefined
// manyMoreArgs []

// 4 Argument length
function fun1(...theArgs) {
  console.log(theArgs.length);
  console.log(arguments.length);
}
fun1(); // 0 0
fun1(5, 6, 7); // 3 3

// 5 Using rest parameters in combination with ordinary parameters

// A rest parameter is used to collect all parameters after the first parameter into an array.

function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]

// 6 From arguments to an array

// Array methods can be used on rest parameters, but not on the arguments object.

function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}
console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7 (sorting based on string!)

// Error! arguments object can't use built-in methods.
/*
function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1));
*/
// ทดลอง
function m(a) {
  return 1 + a; // 1 + undefined = Nan
}
console.log(m());

// arguments need to be converted to a normal array before calling array methods on them.
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // or
  const normalArray2 = [].slice.call(arguments);
  // or
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // OK, gives the first argument
  const firstBad = arguments.shift(); // ERROR (arguments is not a normal array)
}

// Easily gain access to a normal array using a rest parameter
function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // OK, gives the first argument
}

///////////////////////

// - MDN -

// Topic: Loops and iteration

// 1 Breaking to a label
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops:', x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops:', z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

// 2 continue statement
i = 0;
let n = 0;

while (i < 5) {
  i++;
  console.log(i);
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// 1 3 7 12

i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, 'is odd.');
  }
  console.log('i =', i);
  console.log('j =', j);
}

// 3 for...in statement

// The for...in statement iterates a specified variable over all the enumerable properties of an object.

/*
for (variable in object)
  statement
*/

const user = {
  name: 'John',
  surname: 'Smith',
  age: 30,
};

function passenger(obj, objName) {
  let result = '';
  for (const key in obj) {
    result += `${objName}.${key} = ${obj[key]}<br>`;
  }
  return result;
}
console.log(passenger(user, 'user'));

// 4 for...of statement

const arr5 = [3, 5, 7];
arr5.foo = 'hello'; // use for...in if have property names

// for...in iterates over property names
for (const i in arr5) {
  console.log(i); // 0 1 2 foo
}

// for...of iterates over property values
for (const i of arr5) {
  console.log(i); // 3 5 7
}

// Destructuring
const obj = { foo: 1, bar: 2 };
for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// foo 1
// bar 2

///////////////////////

// - Learn to Program -

// Topic: Flow Control

// 1 Comparison Methods

// lexicographical ordering, which basically means their dictionary ordering.
console.log('cat' < 'dog'); // true

// The computers order capital letters before lowercase letters.
console.log('ant' < 'Zoo'); // false

// true false are the special objects true and false, not the strings.

// 2 A Little Bit of Logic
const iAmChris = true;
const iAmPurple = false;

console.log(!iAmChris); // false
console.log(!iAmPurple); // true

///////////////////////

// - StackOverFlow -

// Topic: How do you round to 1 decimal place in Javascript?

// 1
const number = 12.3456789;
const rounded = Math.round(number * 10) / 10;
console.log(rounded); // 12.3

// 2
const fixed = rounded.toFixed(1);
console.log(parseFloat(number.toFixed(2)));
console.log(fixed); // string "12.3"

// 3 Add round with precision function 😆
function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
console.log(round(1234.6789)); // 12346

console.log(round(12345.6789, 2)); // 12345.68
console.log(round(12345.6789, 1)); // 12345.7

// can be used to round to nearest 10 or 100 etc...
console.log(round(12345.6789, -1)); // 12350
console.log(round(12345.6789, -2)); // 12300

// correct handling of negative numbers..
console.log(round(-123.44, 1)); // -123.4
console.log(round(123.45, 1)); // 123.5

// can be combined with toFixed to format consistently as string
round(456.7, 2).toFixed(2); // '456.70'
