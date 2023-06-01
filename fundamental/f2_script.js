'use strict';

// Unit: Fundamental Part 2

// ----- OVERVIEW -----
// - Javascript Info -
// Topic: Data Types

let messagee = 'Hello';
messagee = 123456;

// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

// Topic: Number
let nn = 123; // integer
nn = 12.345; // floating point number

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity

console.log('not a number' / 2); // Nan
console.log(NaN + 1); // Nan
console.log(3 * NaN); // Nan
console.log('not a number' / 2 - 1); // Nan

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
console.log(NaN ** 0); // 1

// Topic: BigInt

// In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// Topic: String

// In JavaScript, there are 3 types of quotes.
// 1. Double quotes: "Hello".
// 2. Single quotes: 'Hello'.
// 3. Backticks: `Hello`

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
name = 'John';
console.log(`Hello, ${name}!`);
console.log(`the result is ${1 + 2}`);

// Topic: Boolean (logical type)
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
console.log(isGreater); // true (the comparison result is "yes")

// Topic: The 'null' value

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let age = null;
// The code above states that age is unknown.

// Topic: The 'undefined' value

// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:
let ageZ;
console.log(ageZ); // undefined

// Technically, it is possible to explicitly assign undefined to a variable:
age = 100;
age = undefined;
console.log(age); // undefined

// …But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

// Topic: Objects and Symbols

// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

// The symbol type is used to create unique identifiers for objects.

// Topic: The typeof operator

// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof 'foo'; // "string"
typeof Symbol('id'); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)

// The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.

// The typeof(x) syntax
// typeof is an operator, not a function.
// The parenthesis here aren't a part of typeof. It is used for mathematical grouping which contains a mathematical expression (2+2).
// () also allow to avoid space btw typeof operator and its argument.

// ----- STRING -----

// - MDN -
// Handling text - strings in JS

// 1
const string = 'The revolution will not be televised.';
console.log(string);

// 2
// Don't forget quote '' on string
// const badString1 = This is a test; // Error

// These lines don't work because any text without quotes around it is assumed to be a variable name, property name, a reserved word, or similar. If the browser can't find it, then an error is raised.

// 3
const badString = string;
console.log(badString); // work!

// Single quotes vs. double quotes
// 1
const sgl = 'Single quotes.';
const dbl = 'Double quotes';
console.log(sgl, dbl);

// 2 ' "
// const badQuotes = 'What on earth?"; // Error: unexpected token

// 3
const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "\nI'm feeling blue.";
console.log(sglDbl, dblSgl);

// 4 It confuses the browser where the sting ends.
// const bigmounth = 'I've got right to take my place...'; // Error

// Escaping characters in a string
// 1 '\' => recognized as text
// const bigMouth = 'I\'ve got no right to take my place...';

// Concatenating strings ``
// Use 'template literal' to join strings

// 1
let greeting = `Hello`;
const nameA = 'Chris';
greeting = `Hello, ${nameA}`;
console.log(greeting); // Hello, Chris

// 2
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined);

// 3 Concatenation in context
const button = document.querySelector('button');

const greet = function () {
  const name = prompt('What is your name?');
  console.log(`Hello ${name}, nice to meet you !`);
};

button.addEventListener('click', greet); // Hello job, nice to meet you !
// window.prompt() function / window.alert() function

// 4 Concatenation using '+'
greeting = 'Hello';
name = 'Chris';
console.log(greeting + ', ' + name);
console.log(`${greeting}, ${name}`);

// Numbers vs. strings
// 1
name = 'Front ';
let number = 242;
console.log(`${name}${number}`);

// 2 Number()
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum); // number

// 3 toString()
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2); // string

// Including expressions in strings
// 1
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output);

// Multiline strings
// 1
// Template literals respect the line break in the source code.
const output2 = `I like the song.
I gave it a score of 90%.`;
console.log(output2);
/*
I like the song.
I gave it a score of 90%.
*/

// 2 '\n'
const output3 = 'I like the song.\nI gave it a score of 90%.';
console.log(output3);
/*
I like the song.
I gave it a score of 90%.
*/

// - W3 -
// String Methods

// 1 length
let text = 'ABCD';
let length = text.length;
console.log(length); // 4

// 2 Extracting String Part - 3 methods

// slice(start, end)
// first position is 0
// second position is 1
text = 'Apple, Banana, Kiwi';
let part = text.slice(7, 13);
console.log(part); // Banana

text = 'Apple, Banana, Kiwi';
part = text.slice(7);
console.log(part); // Banana, Kiwi

text = 'Apple, Banana, Kiwi';
part = text.slice(-12); // count from the end of str
console.log(part); // Banana, Kiwi

text = 'Apple, Banana, Kiwi';
part = text.slice(-12, -6);
console.log(part); // Banana

// substring(start, end)
// The diff from slice() is that value < 0 is treated as 0.
let str = 'Apple, Banana, Kiwi';
part = text.substring(7, 13);
console.log(part); // Banana

part = text.substring(-7); // 0
console.log(part); // Apple, Banana, Kiwi

part = text.substring(7);
console.log(part); // Banana, Kiwi

// substr(start, length)
// The second parameter specifies the 'length' of the extract part.
str = 'Apple, Banana, Kiwi';
part = str.substr(3, 5); // le, B
console.log(part);

// If you omit the second parameter, substr() will slice out the rest of the string.
part = str.substr(7);
console.log(part); // Banana, Kiwi

part = str.substr(-4);
console.log(part); // Kiwi

// 3 Replacing String Content
text = 'Please visit Microsoft!';
let newText = text.replace('Microsoft', 'W3Schools');
console.log(newText); // Please visit W3Schools!

// replace() method does not change the str it is called on!
// replace() method returns a new str.
// replace() method replaces only the first match.

text = 'Please visit Microsoft and Microsoft!';

newText = text.replace(/Microsoft/g, 'W3Schools');
console.log(newText); // Please visit W3Schools and W3Schools!

newText = text.replace('MICROSOFT', 'W3Schools'); // uppercase not work!
console.log(newText); // Please visit Microsoft and Microsoft!

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
newText = text.replace(/MICROSOFT/i, 'W3Schools');
console.log(newText); // Please visit W3Schools and Microsoft!

// Regular expressions are written without quotes!

// 4 String ReplaceAll()
text = 'I love cats. Cats are very easy to love. Cats are very popular.';

newText = text.replaceAll('Cats', 'Dogs').replaceAll('cats', 'dogs');
console.log(newText);

newText = text.replaceAll(/Cats/g, 'Dogs').replaceAll(/cats/g, 'dogs');
console.log(newText);

// 5 Converting to Upper and Lower case

let text1 = 'Hello World!';
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

// 6 String concat()
let text2 = 'Hello';
let text3 = 'World';
console.log(text2.concat(':)', text3));
console.log(text2 + ':)' + text3);

// All string methods return a new string. They don't modify the original string.

// String are immutable: Strings cannot be changed, only replaced. 😆

// 7
// The trim() method removes whitespace from both sides of a string.
// String trim()
text1 = '   Hello World!   ';
console.log(text1.trim()); // Hello World!

// String trimStart()
console.log(text1.trimStart());

// String trimEnd()
console.log(text1.trimEnd());

// 8 Padding
text = '5'; // 5 (num) => cannot pad

// padStart()
console.log(text.padStart(4, 0)); // 0005
console.log(text.padStart(4, 'x')); // xxx5

// padEnd()
console.log(text.padEnd(4, 0)); // 5000
console.log(text.padEnd(4, 'x')); // 5xxx

// The padStart()/ padEnd() method is a string method. To pad a number, need to convert the number to a string first 😆.

// 9
// charAt()
// The charAt() method returns the character at a specified index (position) in a string:
text = 'HELLO WORLD';
let char = text.charAt(0);
console.log(char); // H

// charCodeAt() 😵‍💫
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).
char = text.charCodeAt(0);
console.log(char); // 72

// 10 Property Access
text = 'HELLO WORLD';
console.log(text[0]); // H

console.log(text[20]); // undefined
console.log(text.charAt(20)); // empty str

// text[0] = "A"; // Not work!
// Error: Cannot assign to read only property '0' of string 'HELLO WORLD'

// Note:
// Property access might be a little unpredictable:
// It makes strings look like arrays (but they are not)
// If no character is found, [] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = 'A' gives no error (but does not work!). However, can do this in array! 🧐

// 11 Converting a String to an Array

text = 'a, b, c, d, e, f';

// split()
console.log(text.split(',')); // ['a', ' b', ' c', ' d', ' e', ' f']

// 12 String Properties and Methods

// 😆
// Normally, strings like "John Doe", cannot have methods or properties because they are not objects.

// But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

// All strings methods return a new value. They don't change the original variable.

const job = ['j', 'o', 'b'];
job[2] = 'y';
console.log(job); // 3) ['j', 'o', 'y']

const joy = 'joy';
// joy[2] = "b"; // Error
console.log(joy[2]); // y

// - MDN -
// String

// 1 Creating strings
// String can be created as primitive from string literals or as object (String()).

const string1 = 'A string primitive';
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String('A String object');
console.log(typeof string4); // obj

// 2 Character access
console.log('cat'.charAt(1)); // a
console.log('cat'[1]); // a

// 3 Comparing strings
const a3 = 'a'; // 97
const b3 = 'b';
if (a3 < b3) {
  // true
  console.log(`${a3} is less than ${b3}`);
} else if (a3 > b3) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a3} and ${b3} are equal`);
}

// all comparison operators, including === and ==, compare strings case-sensitively. Need to convert str in the same case first.

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areEqualCaseInsensitive('b', 'B')); // true

// 4 String primitives and String objects
const strPrim = 'foo'; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into string primitive '1'
const strPrim3 = String(true); // Coerced into the string primitive 'true'
const strObj = new String(strPrim); // String with new returns a string wrapper object.

// eval()
// String primitive passed to eval are treated as source code.
// String object are treated as all other obj by returning the obj
const s1 = '2 + 2';
const s2 = new String('2 + 2');
console.log(eval(s1)); // 4
console.log(eval(s2)); // String {'2 + 2'}
console.log(eval(s2.valueOf())); // 4

// 5 String coercion
// toString()
// String()
// +
// `${x}`

// 6 Escape sequence
// \n, \', \", \\, \t

// 7 Long literal strings
// +
const longString =
  'This is a very long string which needs ' +
  'to wrap across multiple lines because ' +
  'otherwise my code is unreadable.';
console.log(longString);

// \
const longString2 =
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';
console.log(longString2);

// ----- Conditionals -----

// - Javascript Info -

// Unit: Comparisons

// == means the equality test, while a single signal = means an assignment.

// 1 Boolean is the result

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.

console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

// A comparison result can be assigned to a variable, just like any value.
let result = 5 > 4;
console.log(result); // true

// 2 String comparison

// Comparing string from 'dictionary' or 'lexicographical' order.
// strings are compared letter-by-letter.
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true

// 1) Compare the first character of both strings
// 2) If the first character from 1st str is greater than the other str's, then first string is greater than the second.
// 3) Otherwise, if both strings' first characters are the same, compare the second characters the same way.
// 4) Repeat until the end of either string
// 5) If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

// 3 Comparison of different types

// When comparing value of difference types, JS converts the values to numbers.
console.log('2' > 1); // true
console.log('01' == 1); // true

console.log(true == 1); // true
console.log(false == 0); // true

// A funny consequence
let a = 0;
console.log(Boolean(a)); // false

let b = '0';
console.log(Boolean(b)); // true!

console.log(a == b); // true

// 4 Strict equality

// A regular has a problem. It can't differentiate 0, '' from false.
console.log(0 == false); // true
console.log('' == false); // true

// This happens bcs operands of different types are converted to numbers by the equality operator ==.

// Use a strict equality operator === checks the equality without type conversion.

console.log(0 === false); // false

// 5 Comparison with null and undefined

console.log(null === undefined); // false

// ==
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
console.log(null == undefined); // true

// Strange result: null vs 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Comparisons (>=) converts null to a number while equality check (=) for undefined and null is defined such that.

// An incomparable undefined
// All false because undefined gets convert to Nan which is a special numeric value and returns false for all comparisons.
// In ==, undefined only equals null, undefined.
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Task #1
// 5 > 4 => true
// "apple" > "pineapple" => false
// "2" > "12" => true! 😵‍💫
// undefined == null => true
// undefined === null => false
// null == "\n0\n" => false!
// null === +"\n0\n" => false

// - W3 -

// Unit: Javascript if, else, and else if

const hour = new Date().getHours();
if (hour < 10) {
  console.log('Good morning');
} else if (hour < 20) {
  console.log('Good day');
} else {
  console.log('Good evening');
}

// - MDN -

// Unit: Making decisions in your code - conditionals

// 1
// Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement
let cheese = 'Cheddar';

if (cheese) {
  // true
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}

// 2
// cannot do x == 5 || 7 || 10
// if (x === 5 || x === 7 || x === 10 || x === 20) {
//   // run my code
// }

// - Javascript Info -

// Unit: Conditional branching:if,'?'

// 1 The 'if' statement
const year = 2015;
if (year == 2015) {
  console.log('That is correct');
  console.log("You're so smart!");
}

// 2 Boolean conversion
if (0) {
  // 0 is falsy
  console.log(true); // no value
}

if (1) {
  // 1 is truthy
  console.log(true); // true
}

let cond = year == 2015; // equality evaluates to true or false
if (cond) {
  console.log(true);
}

// 3 The 'else' clause

// else block is executed when the condition is falsy.

if (year === 2015) {
  console.log('You guessed it right!');
} else {
  console.log('How can you be so wrong');
}

// 4 Several conditions: 'else if'

// else if block let us to test variants of a condition.

if (year < 2015) {
  console.log('Too early...');
} else if (year > 2015) {
  console.log('Too late');
} else {
  console.log('Exactly!');
}

// 5 Conditional operator '?'

// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands.

age = 25;
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);

// the same
let accessAllowed2 = age > 18;

// 6 Multiple '?' 😆

// A sequence of question mark operator ? can return a value that depends on more than one condition.
age = 30;
let message =
  age < 3
    ? 'Hi baby!'
    : age < 18
    ? 'Hello'
    : age < 100
    ? 'Greetings!'
    : 'What an unusual age!';
console.log(message);

// 7 Non-traditional use of '?'

// The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

// Task #1
if ('0') {
  console.log('Hello');
}
// true bcs str is not empty!

// Task #2
let officialName = 'ECMAScript';
if (officialName === 'ECMAScript') {
  console.log('Right!');
} else {
  console.log('You don\'t know "ECMAScript');
}

// Task #3
let num = 23; // prompt('Guess: ');
if (num > 0) console.log(1);
else if (num < 0) console.log(-1);
else console.log(0);

// Task #4
a = 8;
b = 9;
let resultTask = a + b < 4 ? 'below' : 'Over';
console.log(resultTask);

// Task #5
let login = 'Programmer';
let mes =
  login === 'Programmer'
    ? 'Hello'
    : login === 'Director'
    ? 'Greetings'
    : login === 'No login'
    ? 'No login'
    : '';
console.log(mes);

// - Digital Oceans -

// Unit: How to Use the Switch Statement in JavaScript

// 1 Switch
/*
switch (expression) {
  case x:
    // execute case x code block
    break;
  case y:
    // execute case y code block
    break;
  default:
  // execute default code block
}
*/
// 1) The expression is evaluated

// 2) The first case, x, will be tested against the expression. If it matches, the code will execute, and the break keyword will end the switch block.

// 3) If it does not match, x will be skipped and the y case will be tested against the expression. If y matches the expression, the code will execute and exit out of the switch block.

// 4) If none of the cases match, the default code block will run.

// 0 stands for Sunday
const day = new Date().getDay();

// The break command will halt the switch block after expression matched with the case.
switch (day) {
  case 0:
    console.log("It's Sunday, time to relax!");
    break;
  case 1:
    console.log('Happy Monday!');
    break;
  case 2:
    console.log("It's Tuesday. You got this!");
    break;
  case 3:
    console.log('Hump day already');
    break;
  case 4:
    console.log("Just one more day 'til the weekend!");
    break;
  case 5:
    console.log('Happy Friday!');
    break;
  case 6:
    console.log('Have a wonderful Saturday!');
    break;
  default:
    console.log('Something went horribly wrong...');
}

// 2 Switch Ranges

// When we need to evaluate a range of values in a switch block, as opposed to a single value. We can do this by setting our expression to true and doing an operation within each case statement.

const grade = 87;
switch (true) {
  case grade >= 90:
    console.log('A');
    break;
  case grade >= 80: // first match will be the output!
    console.log('B');
    break;
  case grade >= 70:
    console.log('C');
    break;
  case grade >= 60:
    console.log('D');
    break;
  default:
    console.log('F');
}

// 3 Multiple Cases

// You may encounter code in which multiple cases should have the same output. In order to accomplish this, you can use more than one case for each block of code.

// 0 stands for January.
const month = new Date().getMonth();

switch (month) {
  // Jan, Feb, Mar
  case 0:
  case 1:
  case 2:
    console.log('Winter');
    break;
  // Apr, May, Jun
  case 3:
  case 4:
  case 5:
    console.log('Spring');
    break;
  // Jul, Aug, Sep
  case 6:
  case 7:
  case 8:
    console.log('Summer');
    break;
  // Oct, Nov, Dec
  case 9:
  case 10:
  case 11:
    console.log('Autumn');
    break;
  default:
    console.log('Something went wrong.');
}

// - The Net Ninja -

// Unit: Regular Expression (RegEx)

// 1 What is RegEx?
// RegEx is used to check that whether the input is an email, website or telephone number or not.

// 2 Simple RegEx Patters

// Reg: /ninja/
// Ex. ninja ninja Ninja

// / /g => global (cover all ninja)
// / /i => insensitive (not strict capital letter)
// / /gi Cover both ninja and Ninja

// 3 Character Sets

// [] => count only 1 character

// Reg:/[np]000/g
// Match: n000 p000
// Not match: np000 (n only)

// Reg:/[^pe2]000/g
// Match: a000
// Not match: p000 e000

// 4 Ranges

// Reg: /[a-zA-Z]inja/g or /[a-z]inja/gi
// Match: ninja Winja

// Reg: /[0-9]inja/g
// Match: 0inja 6inja

// 5 Repeating Characters

// Reg: /[0-9]+/g => infinity
// Match: 0123456.....

// Reg: /[0-9]{11}/g => {} how many time we want this string to be.
// Match: 12345678911

// Reg: /[a-z]{5}/g
// Match: ninja hello

// Reg: /[a-z]{5,8}/g => match btw 5-8 characters or number [0-9]
// Match: ninja hello hellowow ninjas

// Reg: /[0-9]{5,}/g => at least 5 number
// Match: 01234 123456
// Not match: 123

// 6 Metacharacters

// \d match any digit character (same as [0-9])
// \w match any word character (a-z, A-Z, 0-9 and _)
// \s match a whitespace character (spaces, tabs stc)
// \t match a tab character only

// d -- matches the literal character 'd'
// \d -- matches any digit character

// Reg: /\w/g
// Match: 0aA_
// Not match: @

// Reg: /\s/g
// Match: (whitespace)

// Reg: /\d{3}\s\w{5}/g
// Match: 123 ninja, 123 ninj0
// Not match: 123  ninja, 98d hello

// 7 Special Characters

// '+' The one-or-more quantifier
// '\' The escape character
// '[]' The character set
// '[^]' The negate symbol in a character set

// '?' The zero-or-one quantifier (makes a preceding char optional)
// '.' Any character whatsoever (except the newline character)
// '*' The 0-or-more quantifier (a bit like +)

// Reg: /hello?/g
// Match: hello hell
// Not match: hel

// Reg: /a[a-z]?/g
// Match: a, az

// Reg: /car./g => dot can be any character
// Match: car@ carl car_ car]

// Reg: /.+/g => all matches

// Reg: /a[a-z]*/g
// Match: asdfgjoifhug
// Not match: asdubvpf0921 (not match only number)

// Reg: /abc*/g
// Match: abcabc
// Not match: jdocso

// Reg: /abc\*/g => \ escape character
// Match: abc*

// 8 Starting & Ending Patterns

// ^ match first 5 letters
// Reg: /[^a-z]{5}/i
// Match: 1234567 (just only 12345)

// $ match last 5 letters
// Reg: /[a-z]{5}$/i
// Match: 12345678 (just only 5678)

// ^ + $ don't get any match!

// 9 Alternate Characters

// Reg: /(pet|toy|crazy)? rabbit/ig
// Match: pet rabbit,  rabbit
// | => or

// Reg: /job? op/ig
// Match: job op, jo op

// 10 Creating a Form
// forking file from github

// Continue at regex-playlist file 💥
