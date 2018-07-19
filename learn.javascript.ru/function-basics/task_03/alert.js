// Script for task #3 from https://learn.javascript.ru/function-basics#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F-min

function min (a,b) {
  return (a < b) ? a : b;
}

console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);
