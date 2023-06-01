'use strict';

// 1 Topic: Targeting Nodes with Selectors
const container = document.querySelector('#container');

console.dir(container.firstElementChild);
// selects the first child of #container => .display
console.dir(container.lastElementChild);

const controls = document.querySelector('.controls');
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

////////////////////////

// 2 Topic: DOM Methods

// 2.1 Query Selectors

// element.querySelector(selector)
// element.querySelectorAll(selectors)

// When using querySelectorAll, the return value is not an array, it's really a 'nodelist'.

// So, several array methods are missing from nodelists.

// So, we need to convert nodelist into an array by using Array.from() or spread operator

///////////////////////////

// - MDN -
// Topic: Spread syntax(...)

// 1
// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
console.log(sum.apply(null, numbers)); // 6

// 3 places that accept the spread syntax
// 1) Function arguments
// myFunction(a, ...iterableObj, b)

// 2) Array literals
// [1, ...iterableObj, '4', 'five', 6]

// 3) Object literals
// { ...obj, key: 'value' }

// 3.1)
// Only iterable objects, like Array, can be spread in array and function parameters.

const obj = { key1: 'value1' };
// const array = [...obj]; // TypeError: obj is not iterable

// 3.2)
// Spreading in object literals enumerates the own properties of the object.

// For arrays, all indices are enumerable own properties, so arrays can be spread into objects. 😆
let array = [1, 2, 3];
const obj1 = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// 2 Spread in function calls

// 2.1 Replace Function.prototype.apply()
function myFunction(v, w, x, y, z) {}
let args = [0, 1];
myFunction.apply(null, args);

// replace spread syntax
myFunction(...args);

// Spread syntax can be used multiple times.
myFunction(-1, ...args, 2, ...[3, 4]);
console.log(...[3, 4]); // 3 4

// 2.2 Apply for new operator
// A constructor with new cannot directly use an array and apply().
const dateFields = [1970, 0, 1];
const d = new Date(...dateFields);

console.log(d); // Thu Jan 01 1970 00:00:00 GMT+0700 (Indochina Time)

// 3 Spread in array literals

// 3.1 A more powerful array literal

// Creating a new array by using an existing array as one part of it
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]

// 3.2 Copy an array
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()
arr2.push(4); // [1, 2, 3, 4]

// Note: Spread syntax effectively goes one level deep while copying an array. 😆
const a = [[1], [2], [3]];
const b = [...a];

console.log(b.shift().shift()); // 1
console.log(b); // [[2], [3]]

console.log(a); // [[], [2], [3]] => no deep clone!

// 3.3 A better way to concatenate arrays
let arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];

arr3 = arr3.concat(arr4);

// Spread syntax
const arr5 = [...arr3, ...arr2];

// Array.prototype.unshift()
const arr6 = [0, 1, 2];
const arr7 = [3, 4, 5];

Array.prototype.unshift.apply(arr6, arr7);
console.log(arr6); // [3, 4, 5, 0, 1, 2]

// Spread syntax
let arr8 = [0, 1, 2];
const arr9 = [3, 4, 5];

arr8 = [...arr9, ...arr8];
console.log(arr8); // [3, 4, 5, 0, 1, 2]

// Note:
// Unshift() modifies the original array.
// Spread syntax creates a new array.

// 3.4 Spread in object literals
// Shallow-cloning
const obj2 = { foo: 'bar', x: 42 };
const obj3 = { foo: 'baz', y: 13 };

const cloneObj = { ...obj2 };
const mergedObj = { ...obj2, ...obj3 }; // {foo: 'baz', x: 42, y: 13}

// Object.assign() can be used to mutate an object, whereas spread syntax can't.
Object.assign(obj2, { x: 1337 });
console.log(obj2); // {foo: 'bar', x: 1337}

// Object.assign() triggers setters on the target, whereas spread syntax doesn't.
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val); // 1
    },
  },
  { foo: 1 }
);
console.log(objectAssign); // {}
// Logs "1"; objectAssign.foo is still the original setter

const spread = {
  set foo(val) {
    console.log(val); // Nothing is logged
  },
  ...{ foo: 1 },
};
console.log(spread); // {foo: 1}

// Cannot naively re-implement the Object.assign() function through a single spreading:

// rest parameter => spreads an array of arguments into the obj literal
const obj4 = { foo: 'bar', x: 42 };
const obj5 = { foo: 'baz', y: 13 };
const merge = (...objects) => ({ ...objects });

let mergedObj4 = merge(obj4, obj5);
console.log(mergedObj4);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }
const mergedObj5 = merge({}, obj4, obj5);
console.log(mergedObj5);

// spread syntax 😆
const merge2 = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

mergedObj4 = merge2(obj4, obj5);
console.log(mergedObj4); // {foo: 'baz', x: 42, y: 13}

////////////////////////

// 2.2 Element Creation

// document.createElement(tagName, [options])
const div = document.createElement('div');

// 2.3 Append Elements
// parentNode.appendChild(childNode) appends childNode as the last child of parentNode

// parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

// 2.4 Remove Elements
// parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child

// 2.5 Altering Elements
const div1 = document.createElement('div');
// creates a new div referenced in the variable 'div'

// 2.6 Adding Inline Style
div.style.color = 'blue';
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';
// adds several style rules

div.setAttribute('style', 'color: blue');

// Access CSS rule from JS
// div.style.background - color; // doesn't work - attempts to subtract color from div.style.background

div.style.backgroundColor; // accesses the div's background-color style (CamelCase)

div.style['background-color']; // also works

div.style.cssText = 'background-color: white;'; // ok in a string

//////////////////////////

// - DOM Enlightenment -

// Topic: 6.2 Getting, setting, & removing individual inline CSS properties

//////////////////////////

// 2.7 Editing Attributes
div.setAttribute('id', 'theDiv');
// if id exist, update it to 'theDiv', else create an id with value 'theDiv'

div.getAttribute('id');
// returns value of specified attribute, in this case 'theDiv'

div.removeAttribute('id');
// removes specified attribute

// 2.8 Working with Classes
div.classList.add('new');
// adds class 'new' to your new div

div.classList.remove('new');
// removes 'new' class from div

div.classList.toggle('active');
// if div doesn't have class 'active' then add it, or if it does, then remove it
console.dir(div); // div.active

// Use toggle rather than adding and removing

// 2.9 Adding Text Content
div.textContent = 'Hello World';
// creates a text node containing 'Hello World!' and inserts it in div
console.log(div);

// 2.10 Adding HTML Content
div.innerHTML = '<span>Hello World!</span>';
// renders the HTML inside div

// your HTML FILE
// your Javascript file
const container2 = document.querySelector('#container2');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

console.log(content);
container2.appendChild(content);

// IN THE DOM
console.log(container2);
/*
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>
*/
// Keep in mind! JS doesn't alter your HTML, but the DOM.

// Video: How To Prevent The Most Common Cross Site Scripting Attack

// Hacker can get our info. 😱
// innerHTML is not safe when the user inputs valid HTML or a script tag or an image tag, it will render that as actual HTML instead of as text.😆

// We need to change to innerText!

///////////////////////

// Note:
// 1. Need to place JS file at bottom of HTML so that it gets run after the DOM nodes are parsed and created.

// 2. Can link JS file in the <head> of HTML.
/*
<head>
  <script src="js-file.js" defer></script>
</head>
*/

// - MDN -
// Topic: Applying CSS and Javascript to HTML

// The <script> element should also go into the head, and should include a src attribute containing the path to the JavaScript you want to load, and defer, which basically instructs the browser to load the JavaScript after the page has finished parsing the HTML. This is useful as it makes sure that the HTML is all loaded before the JavaScript runs, so that you don't get errors resulting from JavaScript trying to access an HTML element that doesn't exist on the page yet.

////////////////////////

// 3 Topic: Exercise

const container3 = document.querySelector('#container3');

// 1
const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";
container3.appendChild(p);

// 2
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container3.appendChild(h3);

// 3
const div2 = document.createElement('div');
div2.style.cssText = 'border: solid black 1px; background: pink;';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p1 = document.createElement('p');
p1.textContent = 'ME TOO!';

div2.appendChild(h1);
div2.appendChild(p1);

container3.appendChild(div2);

///////////////////////

// 4 Topic: Events

// 4.1
// Method 1
// Can only set one 'onclick'
/*
<button onclick="alert('Hello World')">Click Me</button>
*/

// Method 2
// Have only 1 onclick property
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

// Method 3
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  console.log('Hello World');
});

// These 3 methods can be used with named functions
function alertFunction() {
  alert('YAY! YOU DID IT!');
}
// Method 1
/*
<button onclick="alertFunction()">CLICK ME BABY</button>
*/

// Method 2
btn.onclick = alertFunction;

// Method 3
btn.addEventListener('click', alertFunction);

// Access more information about the event by passing a parameter to the function that we are calling
btn.addEventListener('click', function (e) {
  console.log(e);
});
// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

// The e in that function is an object that references the event itself. Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked. 😆
btn.addEventListener('click', function (e) {
  console.log(e.target);
});

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

///////////////////////

// - DEV -
// Topic: Understanding Callbacks

// 1 What Callbacks Look Like
// Callbacks are just functions passed into other functions as arguments (as a parameter).
const notes = ['do', 'ray', 'me'];

notes.forEach(note => {
  console.log(note);
});

notes.forEach(function (note) {
  console.log(note);
});

// This one is tricky, but will make more sense later.
notes.forEach(console.log);
// do 0 (3) ['do', 'ray', 'me']

// 2 How Callbacks Work
// Example 1
// Iterator Functions (forEach under the hood) 😆
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    // This is when the callback function gets called, or executed
    callback(array[i]);
  }
}
// You would call it like this
const myArry = [2, 3, 4, 2];
myForEach(myArry, item => {
  console.log(item + 2);
});
// or
myForEach(myArry, function (item) {
  console.log(item + 2);
});

// Where did 'item' come from?
// The line with callback(array[i]) is calling the callback function with an argument.

// Can also declaring the function we want to use as a callback
function printItemPlusTwo(item) {
  console.log(item + 2);
}
// 'Item' is passed into the function. (We don't need to declare item here.)
// It is the same as the 'console.log' example above except we declared our own function.
myForEach(myArry, printItemPlusTwo);

// Example 2
function myMap(array, callback) {
  const myNewArray = [];

  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(array[i]);
    myNewArray.push(callbackResult);
  }

  return myNewArray;
}
// This could be called like this:
const addedArray = myMap([1, 2, 3], arrayNum => {
  return arrayNum + 2;
});
// Or
const addedArray2 = myMap([1, 2, 3], arrayNum => arrayNum + 2);

// 3 Event Listeners (DOM)
const element = document.querySelector('#myId');
element.addEventListener('click', event => {
  // `event` is passed into the callback from the `.addEventListener` function when it receives a 'click' event.
  console.log(event.target.value);
  console.log(event);
  // event => PointerEvent object {}
});

// Where does event object come from?

// This event object is passed into the callback function by the .addEventListener function. A function is calling another function.

///////////////////////

// 4.2 Attaching Listeners to Groups of Nodes

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

console.log(buttons);
// NodeList(12) [button, button#calculate, button#clear, button#buttonSearch, button#buttonNumber, button, button#btn, button#btn1, button, button#1, button#2, button#3]

////////////////////

// Assignment

// 1
// Continue at index-START (Javascript30)

// 2
// - MDN -
// Use keypress instead of keyCode!

// 3
// - MDN -
// Topic: KeyboardEvent: code property

// Use KeyboardEvent.key instead of KeyboardEvent.code

window.addEventListener(
  'keydown',
  event => {
    const p = document.createElement('p');

    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    document.getElementById('output').appendChild(p);

    window.scrollTo(0, document.body.scrollHeight);
  },
  true
);

// Handle keyboard events in a game

// shipSize contains the size of the ship
let shipSize = {
  width: 30,
  height: 30,
};

// position is used to track the position of the ship within the play field.
let position = {
  x: 200,
  y: 200,
};

// moveRate is the number of pixels each keystroke moves the ship forward and backward.
let moveRate = 9;
// turnRate is how many degrees of rotation the left and right steering controls apply per keystroke.
let turnRate = 5;

// angle is the 'current' amount of rotation applied to the ship in degrees.
let angle = 0;

let spaceship = document.getElementById('spaceship');

function updatePosition(offset) {
  let rad = angle * (Math.PI / 180);
  position.x += Math.sin(rad) * offset;
  position.y -= Math.cos(rad) * offset;

  if (position.x < 0) {
    position.x = 399;
  } else if (position.x > 399) {
    position.x = 0;
  }

  if (position.y < 0) {
    position.y = 399;
  } else if (position.y > 399) {
    position.y = 0;
  }
}

// handles applying the rotation and position by using SVG transform
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15)`;

  spaceship.setAttribute('transform', transform);
}
refresh();

window.addEventListener(
  'keydown',
  event => {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.code) {
      case 'KeyS':
      case 'ArrowDown':
        // Handle 'back'
        updatePosition(-moveRate);
        break;
      case 'KeyW':
      case 'ArrowUp':
        // Handle 'forward
        updatePosition(moveRate);
        break;
      case 'KeyA':
      case 'ArrowLeft':
        // Handle 'turn left'
        angle -= turnRate;
        break;
      case 'KeyD':
      case 'ArrowRight':
        // Handle 'turn right'
        angle += turnRate;
        break;
    }
    refresh();

    if (event.code !== 'Tab') {
      event.preventDefault();
    }
  },
  true
);

////////////////////////

// ELS Chapter 14
// Topic: The Document Object Model

// Changing the DOM
// .appendChild
// .removeChild
// .insertBefore(newNode, referenceNode)
// .replaceChild(newNode, referenceNode)

// Creating Nodes
// document.createTextNode

let arrayish = { 0: 'one', 1: 'two', length: 2 };
let arrayE = Array.from(arrayish);
console.log(arrayE.map(s => s.toUpperCase())); // ['ONE', 'TWO']

// document.createElement return a new empty node

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != 'string') node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

// quote
document
  .getElementById('quote')
  .appendChild(
    elt(
      'footer',
      '-',
      elt('strong', 'Karl Popper'),
      ', preface to the second edition of ',
      elt('em', 'The Open Society and Its Enemies'),
      ', 1950'
    )
  );

// Attributes

// getAttribute and setAttribute
let paras = document.body.getElementsByTagName('p');
for (let para of Array.from(paras)) {
  if (para.getAttribute('data-classified') == 'secret') {
    para.remove();
  }
}
// It is recommended to prefix the names of such made-up attributes with data- to ensure they do not conflict with any other attributes.

// Layout
// block elements => <p> <h1>
// inline elements => <a> <strong>

let para = document.querySelector('.layout');
console.log('clientHeight:', para.clientHeight);
console.log('offsetHeight:', para.offsetHeight);

// The querySelectorAll method, which is defined both on the document object and on element nodes, takes a selector string and returns a NodeList containing all the elements that it matches.

const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

// Exercise #1
const mountains = document.querySelector('#mountains');
const table = document.createElement('table');
mountains.appendChild(table);

const firstRow = document.createElement('tr');
for (let prop in MOUNTAINS[0]) {
  const tableHead = document.createElement('th');
  tableHead.textContent = prop;

  firstRow.appendChild(tableHead);
}
table.appendChild(firstRow);

for (const place of MOUNTAINS) {
  const secondRow = document.createElement('tr');

  for (const value of Object.values(place)) {
    const tableData = document.createElement('td');

    tableData.textContent = value;

    secondRow.appendChild(tableData);
  }
  table.appendChild(secondRow);
}

//////////////////////////

// ELS Chapter 15
// Topic: Handling Events

// Event Handlers
// Browsers do this by allowing us to register functions as handlers for specific events.

// Events and DOM Nodes
let button = document.querySelector('#once');

function once() {
  console.log('Done.');
  button.removeEventListener('click', once);
}
button.addEventListener('click', once);

// Event Objects
let button1 = document.querySelector('#event');

button1.addEventListener('mousedown', event => {
  console.log(event);
  if (event.button === 0) {
    console.log('Left button');
  } else if (event.button === 1) {
    console.log('Middle button');
  } else if (event.button === 2) {
    console.log('Right button');
  }
});

// Propagation
let para2 = document.querySelector('#propagation1');
let button2 = document.querySelector('#propagation2');

para2.addEventListener(
  'mousedown',
  () => {
    console.log('Handler for paragraph.');
  },
  { capture: true } // out to in
);

button2.addEventListener('mousedown', event => {
  console.log('Handler for button.');
  if (event.button == 0) event.stopPropagation();
});

// target property
document.body.addEventListener('click', event => {
  console.log(event);
  console.log(event.target);
  if (event.target.nodeName == 'BUTTON') {
    console.log('Clicked', event.target.textContent);
  }
});

// Default Actions
let link = document.querySelector('a');
link.addEventListener('click', event => {
  console.log('Nope.');
  event.preventDefault(); // cannot gp to the webpage
});

// Key Events
window.addEventListener('keydown', event => {
  if (event.key === '!') {
    document.body.style.background = 'violet';
  }
});

window.addEventListener('keyup', event => {
  if (event.key === '!') {
    document.body.style.background = '';
  }
});

// key combination (shiftKey, ctrlKey, altKey, commandKey)

window.addEventListener('keydown', event => {
  // - Press control-Space -
  if (event.key === ' ' && event.ctrlKey) {
    console.log('Continuing!');
  }
});

// Pointer Events
// 1) Mouse Clicks
window.addEventListener('click', event => {
  let dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = event.pageX - 4 + 'px';
  dot.style.top = event.pageY - 4 + 'px';
  document.body.appendChild(dot);
});
// <div class="dot" style="left: 555px; top: 1914px;"></div>

// 2) Mouse Motion
// Read in the book 55555 😆

////////////////////

// - Traversy Media -
// Video: Javascript DOM Crash Course - Part 1

console.dir(document);
console.log(document.all);
console.log(document.all[10]);

// GETELEMENTSBYID
// var headerTitle = document.getElementById('header-title')

// GETELEMENTSBYCLASSNAME
// var items = document.getElementByClassName('list-group-item');
// console.log(items); // HTMLCollection
// console.log(items[1]);
// items[1].textContent = 'Hello';

// .textContent => show all text even though having style display none
// .innerText => include css display none
// .innerHTML => put inside parent element

// QUERYSELECTOR
// var submit = document.querySelector('input[type="submit"]')

// var lastItem = document.querySelector('.list-group-item:last-child');

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'red';

// QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');

// console.log(titles); // Nodelist
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectoeAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//  odd[i].style.backgroundColor = '#f4f4f4';
//  even[i].style.backgroundColor = '#ccc';
// }

/////////////////////////

// Video: Javascript DOM Crash Course - Part 2

// TRAVERSING THE DOM
// var itemList = dicument.querySelector('#items');

// parentNode
// console.log(itemList.parentNode) // div
// console.log(itemList.parentNode.parentNode.parentNode) // div div body(get this element)

// parentElement (same as parentNode)
// console.log(itemList.parentElement)
// console.log(itemList.parentElement.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes); // NodeList
// 0: text // lineBreak
// 1: li.list-group-item
// 2: text // So, not suggest to use childNode!

// children (use this instead of childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1]); // item2
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello' // (item 1)

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello'; // (item 4)

// nextSibling
// console.log(itemList.nextSlibling);

// nextElementSibling
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// - createElement -

// create a div
// var newDiv = document.createElement('div');

// Add class
// newDiv.className = 'Hello';

// Add id
// newDiv.id = 'hello1';

// Add Attr
// newDiv.setAttribute('title', 'Hello Div');

// Create text node
// var newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

//////////////////////

// Video: Javascript DOM Crash Course - Part 3

// EVENTS

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {

// console.log(e.target);
// e.target => gives an actual element

// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// var ouput = document.getElementById('output');
// output.innerHTML = '<h3>' + e.target + '</h3>';

// console.log(e.type); // click (type of event)

// console.log(e.clientX); // the position from the browser of window.

// console.log(e.clientY); // the position from the top down of window.

// console.log(e.offsetX); // number comes from the actual element itself.
// console.log(e.offsetY);

// console.log(e.altKey); hold down altKey and click => true!
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

let buttonBrad = document.getElementById('button');
let box = document.getElementById('box');

// buttonBrad.addEventListener('click', runEvent);
// buttonBrad.addEventListener('dblclick', runEvent);
// buttonBrad.addEventListener('mousedown', runEvent);
// buttonBrad.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent); // not fired on Hello
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // fired on Hello
// box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('#textBrad');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent); // in focus out blur

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault(); // For submit only!
  console.log('EVENT TYPE: ' + e.type);

  // console.log(e.target.value);

  document.getElementById('outputBrad').innerHTML =
    '<h3>' + e.target.value + '</h3>';

  document.querySelector('#output').innerHTML =
    '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

  box.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';
}
