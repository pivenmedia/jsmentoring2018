// Script for task #3 from https://learn.javascript.ru/recursion#%D1%87%D0%B8%D1%81%D0%BB%D0%B0-%D1%84%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8

function fib(n) {
  return (n <= 1) ? n : n = fib(n - 1) + fib(n - 2);
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77)); // 5527939700884757
