// Script for task #6 from https://learn.javascript.ru/while-for#%D0%BF%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D1%8F%D1%82%D1%8C-%D1%86%D0%B8%D0%BA%D0%BB-%D0%BF%D0%BE%D0%BA%D0%B0-%D0%B2%D0%B2%D0%BE%D0%B4-%D0%BD%D0%B5%D0%B2%D0%B5%D1%80%D0%B5%D0%BD
var timeToExit = false;
var number = 0;

do {
  number = prompt("Введите число больше 100: ", 0);
  if (number > 100) { timeToExit = true  }
  else if (number === null) { timeToExit = true }
} while (!timeToExit);

if (number !== null ) alert("Finishing with number: " + number)
else alert("You clicked 'Cancel' button")
