'use strict';

// Unit: Problem Solving

// - MDN -

// Topic: for

// for (initialization; condition; afterthought) statement

// 1 Optional for expressions
// You can also omit 3 expressions and make sure to use a break statement
let a = 0;
for (;;) {
  if (a > 3) break;
  console.log(a);
  a++;
}
// In the case where you are not fully using all three expression positions - especially if you are not declaring variables with the first expression but mutating something in the upper scope - consider using a while loop instead.
a = 0;
while (a <= 3) {
  console.log(a);
  a++;
}

// 2 Lexical declarations in the initialization block

// Declaring a variable within the initialization block has important differences from declaring it in the upper scope, especially when creating a closure within the loop body.

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0 1 2
  }, 2000);
}

// 😆
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3 3 3
  }, 2000);
}

// It logs 3, 3, and 3. The reason is that each setTimeout creates a new closure that closes over the i variable, but if the i is not scoped to the loop body, all closures will reference the same variable when they eventually get called — and due to the asynchronous nature of setTimeout, it will happen after the loop has already exited, causing the value of i in all queued callbacks' bodies to have the value of 3.

// 😆
// This also happens if you use a var statement as the initialization, because variables declared with var are only function-scoped, but not lexically scoped (i.e. they can't be scoped to the loop body).

// let i = 0; At the above
// var i = 0; var is a func scope!!!
// for (var i = 0; i < 3; i++) {
for (var z = 0; z < 3; z++) {
  setTimeout(() => {
    console.log(z);
  }, 2000);
}

// The binding values from the last iteration are used to re-initialize the new variables.

// Creating closures allows you to get hold of a binding during any particular iteration. This explains why closures created within the initialization section do not get updated by re-assignments of i in the afterthought.

// 😆
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI()); // 0 0 0
}
// It doesn't log 0 1 2. This is because getI is not re-evaluated on each iteration. The function is created once and closes over the i variable which refers to the variable when the loop was first initialized! 💥

// Fix the above by re-compute getI every time i updates. 💥

for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI()); // 0 1 2
}

for (
  let i = 0, getI = () => i, incrementI = () => i++;
  getI() < 3;
  incrementI()
) {
  // console.log(i); // 0 0 0
  // console.log(getI()); // 0 1 2
  console.log(incrementI()); // 0 2
}

// This logs "0, 0, 0", because the i variable in each loop evaluation is actually a separate variable, but getI and incrementI both read and write the initial binding of i, not what was subsequently declared.

// 3 Using for without a body

// 4 Using for with two iterating variables
const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]); // [0] [5] / [1] [4] / [2] [3]
}
// 1 6
// 2 5
// 3 4

////////////////////////////

//- The Odin Project -

// let answer = parseInt(
//   prompt('Please enter the number you would like to FizzBuzz up to: ')
// );
let answer = 20;

for (let i = 1; i <= answer; i++)
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);

///////////////////////

// - MIT -

// Topic: Basic Programming Techniques

// 1 Eating Cereal
const eatCereal = function (amount) {
  let i = 1;
  while (amount > 0) {
    console.log(`Eat ${i} bite`);
    amount -= 3;
    i++;
  }
};
eatCereal(12);

// 2 String Manipulation
const recurStr = function (word) {
  if (word.length === 1) {
    console.log(word);
  } else {
    for (let i = 0, j = word.length; i < word.length; i++, j--) {
      console.log(word.substring(0, j));
    }

    for (let i = 1, j = 2; i < word.length; i++, j++) {
      console.log(word.substring(0, j));
    }
  }
};
recurStr('Hello');

const recurStr2 = function (word) {
  let i = word.length;
  while (i >= 1) {
    console.log(word.substring(0, i));
    i--;
  }

  let j = 2;
  while (j <= word.length) {
    console.log(word.substring(0, j));
    j++;
  }
};
recurStr2('Hola');

// 3 Towers of Hanoi 😆 kreetttt
/*
Ring
| source | extra pillar | destination
function HanoiMove(stack, source, dest, extra) {
    if(stack height === 1) {
        Transfer stack from source to dest (destination)
    } else {
        HanoiMove(stack n-1, source, extra, dest)
        HanoiMove(stack n-1, extra, dest, source)
    }
}
*/
const HanoiMove = function (ringHeight, source, dest, extra) {
  if (ringHeight === 1) {
    console.log(`${ringHeight} from ${source} to ${dest}`);
  } else if (ringHeight > 1) {
    HanoiMove(ringHeight - 1, source, extra, dest);

    console.log(`${ringHeight} from ${source} to ${dest}`);

    HanoiMove(ringHeight - 1, extra, dest, source);
  }
};
HanoiMove(4, 'A', 'C', 'B');
