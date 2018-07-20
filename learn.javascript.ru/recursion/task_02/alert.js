// Script for task #2 from https://learn.javascript.ru/recursion#%D0%B2%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D1%8C-%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB
function factorial(num) {
  return (num === 1) ? num : num * factorial(num - 1);
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));
