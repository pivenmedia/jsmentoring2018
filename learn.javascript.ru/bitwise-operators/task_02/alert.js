// Script for task #1 from https://learn.javascript.ru/bitwise-operators


function isInteger(int) {
  return (int === (int^0));
}

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false
