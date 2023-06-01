'use strict';

// Unit: Fundamentals Part 5

// - Objects -

// - Javascript Info -
// Topic: Objects

// Primitive values contain only a single thing.

let user = new Object(); // 'object constructor' syntax
user = {}; // 'object literal' syntax

// 1 Literals and properties
// an object
user = {
  // Property has a 'key: value' pairs.
  name: 'John',
  age: 30,
};

// get property values of the obj using the dot
console.log(user.name);
console.log(user.age);

// Add boolean
user.isAdmin = true;

// Remove property using delete operator
delete user.age;

// Can use multiword property names
user = {
  name: 'John',
  age: 30,
  'likes birds': true, // multiword property name must be quoted
};

// last comma is called 'trailing' or 'hanging' comma. Makes it easier to add/remove/move around properties, because all lines become alike.

// 2 Square brackets

// For multiword properties, the dot access doesn't work.
// user.likes birds = true // syntax error

// Using dot => no spaces, not start with digit, not include special character ($ and _ are allowed)

user = {};
// set
user['likes birds'] = true;
// get
console.log(user['likes birds']); // true
// delete
delete user['likes birds'];

// Bracket [] also provide a way to obtain the property name as the result of any expression.
let key = 'likes birds';
// same as user['likes birds'] = true
user[key] = true;
console.log(user); // {likes birds: true}

// The variable key may be calculated at run-time or depend on the user input.
user = {
  name: 'John',
  age: 30,
};

// key = prompt('What do you want to know about the user?', 'name');
key = 'name';
console.log(user[key]); // If key = name, the ans is 'John'

// dot notation cannot be used
key = 'name';
console.log(user.key); // undefined

// 2.1 Computed properties
// Can use [] in an obj literal, when creating an object.

// let fruit = prompt('Which fruit to buy?', 'apple');
let fruit = 'apple';
let bag = {
  [fruit]: 5,
};
console.log(bag.apple); // 5

fruit = 'apple';
bag = {};
bag[fruit] = 5; // take property name from the fruit variable
console.log(bag); // {apple: 5}

fruit = 'apple';
bag = {
  [fruit + 'Computers']: 5,
};
console.log(bag); // {appleComputers: 5}

// 3 Property value shorthand

// Use existing variables as values for property name.
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
user = makeUser('John', 30);
console.log(user.name); // John

// A special property value short hand 😆
function makeUser1(name, age) {
  return {
    name, // same as name: name
    age, // age: age
    // ...
  };
}

// Can use both normal properties and shorthands in the same obj.
let name = 'John';
user = {
  name, // same as name:name
  age: 30,
};
console.log(user); // {name: 'John', age: 30}

// 4 Property names limitations

// As we know, a variable can't have a name equal to one of the language reserved words like 'for', 'let', 'return' stc.
// But, for an obj property, there's no such restriction.

// These properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return); // 6

// Property names can be any strings or symbols. Other types are automatically converted to strings.
obj = {
  0: 'test', // same as '0': 'test'
};
// Both consoles access the same property
// The number0 is converted to string'0'
console.log(obj['0']); // test
console.log(obj[0]); // test

// A minor gotcha! with a special property named __proto__. We can't set it to a non-obj value.
obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

// The assignment to a primitive 5 is ignored.

// 5 Property existence test, 'in' operator

// A non-existing property just returns undefined.
user = {};
console.log(user.noSuchProperty === undefined); // true means 'no such property'

// There's also a special operator 'in' for that.
// 'key' in object; // syntax
user = {
  name: 'John',
  age: 30,
};
// Property name is usually a quoted string.
console.log('age' in user); // true user.age exists
console.log('blabla' in user); // false user.blabla doesn't exist

// If we omit quotes, a variable should contain the actual name to be tested.
user = { age: 30 };
key = 'age';
console.log(key in user); // true, property 'age' exists

// 'in' works correctly when obj property stores undefined.
obj = {
  test: undefined, // usually use null
};
console.log(obj.test); // undefined - no such property?
console.log('test' in obj); // true, the property does exist!

// 6 The 'for..in' loop
/*
for (key in object) {
  // executed the body for each key among object properties
}
*/

user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // keys
  console.log(key); // name age isAdmin
  // values for the keys
  console.log(user[key]); // John 30 true
}
// We could use another variable name here instead of key. Ex. (let prop in obj)

// 6.1 Orders like an object

// Integer properties are sorted, others appear in creation order. 😆
let codes = {
  49: 'Germany',
  41: 'Switzerland',
  44: 'Great Britain',
  // ..,
  1: 'USA',
};
for (let code in codes) {
  console.log(code); // 1 41 44 49
}

// 6.1.1 integer properties? What's that?
// The 'integer property' term here means a string that can be converted to-and-from an integer without a change.

console.log(String(Math.trunc(Number('49')))); // "49", same, integer property
console.log(String(Math.trunc(Number('+49')))); // "49", not same "+49" ⇒ not integer property
console.log(String(Math.trunc(Number('1.2')))); // 1, not same "1.2" ⇒ not integer property

// If the keys are non-integer, they are listed in the creation order.
user = {
  name: 'John',
  surname: 'Smith',
};
user.age = 25;
// non-inter properties are listed in the creation order
for (let prop in user) {
  console.log(prop); // name surname age
}

// To fix the issue with the phone codes. Add a plus '+' sign before each code. 😆
codes = {
  '+49': 'Germany',
  '+41': 'Switzerland',
  '+44': 'Great Britain',
  // ..,
  '+1': 'USA',
};
for (let code in codes) {
  console.log(+code); // 49 41 44 1
}

// Task #1
user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user); // {surname: 'Smith'}

// Task #2 😆
let schedule = {};
function isEmpty(obj) {
  for (let key in obj) {
    // If the loop has started, there is a property.
    return false;
  }
  return true;
}
console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false

// Task #3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum); // 390

// Task #4
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

// --------------------------------

// - MDN -
// Topic: Javascript object basics

// 1 Object basics
// 'Object literal'
let person = {
  name: ['Bob', 'Smith'],
  age: 32,
  // bio: function()
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi I\'m ${this.name[0]}.`);
  },
};
// properties => data items
// methods => function
console.log(person.name);
console.log(person.bio());
console.log(person.introduceSelf());

// 2 Dot notation
// retrieving (or getting) object members

// The object name (person) acts as the namespace -- it must be enter first to access anything inside the object.
console.log(person.age);
console.log(person.bio());

// 2.1 Objects as object properties

// An object property can itself be an object.
person = {
  name: {
    first: 'Bob',
    last: 'Smith',
  },
  age: 32,
  // ..
};
// Chain the extra step
console.log(person.name.first);
console.log(person.name.last);

// In method code
// from       to
// name[0] => name.first
// name[1] => name.last

// 3 Bracket notation

// An alternative way to access obj properties
console.log(person['age']); // 32
console.log(person['name']['first']); // Bob

// Obj sometimes called 'associative arrays' -- they map strings to values in the same way that arrays map numbers to values.

// If obj property name is held in a variable, you need to use [].
person = {
  name: ['Bob', 'Smith'],
  age: 32,
};

function logProperty(propertyName) {
  // prop in var
  console.log(person[propertyName]);
}
logProperty('name'); // ['Bob', 'Smith']
logProperty('age'); // 32

// 4 Setting object members
// set (update) the value of object

person.age = 45;
person['name']['last'] = 'Cratchit';

console.log(person.age);
console.log(person['name']['last']);
console.log(person.name); // ['Bob', 'Smith', last: 'Cratchit']

// Not just only update the values of existing prop and methods, but also create new members
person['eyes'] = 'hazel';
person.farewell = function () {
  console.log('Bye everybody!');
};

console.log(person['eyes']);
console.log(person.farewell());

// Use [] notation only
const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

console.log(person.height); // 1.75m

// . notation accept a literal member name, not a variable value pointing to a name.

// 5 What is 'this'?

// 'this' keyword refers to current object the code is being written inside.
const person1 = {
  name: 'Chris',
  introduceSelf() {
    // Hi I'm Chris.
    console.log(`Hi! I\'m ${this.name}.`);
  },
};

const person2 = {
  name: 'Deepti',
  introduceSelf() {
    // Hi I'm Deepti.
    console.log(`Hi I\'m ${this.name}.`);
  },
};

// 6 Introducing constructors

// Object literals is fine when you create one object.
// Constructors use for create one more object.

// Function version
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi I\'m ${this.name}.`);
  };
  return obj; // return new obj each time we call
}

const salva = createPerson('Salva');
console.log(salva.name);
console.log(salva.introduceSelf()); // Hi I'm Salva.

const frankie = createPerson('Frankie');
console.log(frankie.name);
console.log(frankie.introduceSelf());

// Constructor version
// Using 'new' keyword

// Constructors start with a capital letter 😆
// run the code in the constructor
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi I\'m ${this.name}.`);
  };
}

const salva1 = new Person('Salva1');
console.log(salva1.name);
console.log(salva1.introduceSelf());

// 7 You've been using objects all along

// Use method on a string obj
console.log('Jon,as'.split(','));

// Use method on DOM
// Access DOM
const myDiv = document.createElement('div');
const myVideo = document.querySelector('video');

// the Notifications API — which allows modern browsers to fire system notifications — requires you to instantiate a new object instance using the constructor for each notification you want to fire.
const myNotification = new Notification('Hello!');
console.log(myNotification);

/////////////////////////////////

// - Intermediate/Advanced Array Magic -

// Continue at Web Bos

// 1 Array Cardio Day1

// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(
  investor => investor.year >= 1500 && investor.year < 1600
);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year - b.year);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce(
  (acc, cur) => acc + (cur.passed - cur.year),
  0
);
console.log(totalYears); // 861

// 5. Sort the inventors by years lived 😆
const oldest = inventors.sort((a, b) => {
  const aLive = a.passed - a.year;
  const bLive = b.passed - b.year;
  return aLive > bLive ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Write code in wiki link devTool!
/*
const category = document.querySelector('.mw-category');
const lists = Array.from(category.querySelectorAll('a'));
const de = lists
  .map(a => a.textContent)
  .filter(streetName => streetName.includes('de'));
console.log(de);
*/

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];
// 7. sort Exercise 😆
// Sort the people alphabetically by last name
const alpha = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'poppy',
];
// 8. Reduce Exercise 😆
// Sum up the instances of each of these
const transportation = data.reduce(
  (acc, cur) => {
    // Occur loop inside
    console.log(cur);

    // Create property in acc obj
    if (!acc[cur]) {
      acc[cur] = 0;
    }
    // Count
    acc[cur]++;

    // Return result after finishing loop
    return acc;
  },
  {
    // acc = {}
  }
);
console.log(transportation); // {car: 5, truck: 3, bike: 2, walk: 2, van: 2, …}

// 2 Array Cardio Day2

const people2 = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
// Some and Every Checks
// 1. Array.prototype.some() // is at least one person 19 or older?
const isAdult = people2.some(
  person => new Date().getFullYear() - person.year >= 19
);
console.log(isAdult); // true

// 2. Array.prototype.every() // is everyone 19 or older?
const allAdult = people2.every(
  person => new Date().getFullYear() - person.year >= 19
);
console.log(allAdult); // false

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for (not return arr)
// 3. find the comment with the ID of 823423
/*
const comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
*/
const comment = comments.find(comment => comment.id === 823423);
console.log(comment); // {text: 'Super good', id: 823423}

// Array.prototype.findIndex()
// 4. Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index); // 1

// 5. delete the comment with the ID of 823423
// not mutate 😆
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments);

// mutate
comments.splice(index, 1);
console.table(comments);

///////////////////////////////////

// js-exercise
const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return processedString === processedString.split('').reverse().join('');
};
console.log(palindromes('A car, a man, a maraca.')); // true

// js-exercise
const fibonacci = function (count) {
  if (count < 0) return 'OOPS';
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (i = 1; i < count; i++) {
    const tempt = b;
    b = a + b;
    a = tempt;
  }
  return b;
};

// js-exercise
const peoplee = [
  {
    name: 'Carly',
    yearOfBirth: 2000,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const findTheOldest = function (array) {
  return array.reduce((acc, cur) => {
    console.log(acc);
    const oldestAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
    const currentAge = getAge(cur.yearOfBirth, cur.yearOfDeath);
    return oldestAge < currentAge ? cur : acc; // Each loop returns the result to acc.
    // The last loop return the func value.
    // If initialValue is not specified, accumulator is initialized to the first value in the array. 😆
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
console.log(findTheOldest(peoplee));

// If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown. 😆

//////////////////////////////////

// - The Argument Object -

// - W3 -
// Topic: Javascript Function Parameters

// 1 Function Parameters and Arguments
// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

// 2 Parameters Rules
// JavaScript function definitions do not specify data types for parameters.

// JavaScript functions do not perform type checking on the passed arguments.

// JavaScript functions do not check the number of arguments received.

// 3 Default Parameters
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.
function myFunction(x, y) {
  if (y === undefined) {
    y = 2; // assign a default value
  }
}
// ES6
function myFunction1(x, y = 10) {
  return x + y;
}
console.log(myFunction1(5));

// 4 Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
function sumByRest(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sumByRest(4, 9, 16, 25, 200, 66, 77));

// 5 The Arguments Object

// function built-in object
// contains an array of arguments used when function was called.
let x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x); // 500

x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(x); // 871

// Note! 😆
// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

function funcWithDefault2(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
funcWithDefault2(10);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
