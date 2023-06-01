'use strict';

// Writing Clean Code

const sumArray = function (array) {
  let sum = 0;
  array.forEach(function (number) {
    sum += number;
  });
  return sum;
};
console.log(sumArray([2, 2, 2]));
/*
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;
*/
// Good
const numberOfThings = 10;
const myName = 'Thor';
const selected = true;

// Bad (these start with verbs, could be confused for functions)
const getCount = 10;
const isSelected = true;

// Good
function getCount2() {
  return numberOfThings;
}

// Bad
function myName2() {
  return 'Thor';
}
