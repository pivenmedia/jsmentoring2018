// Script for task #4 from https://learn.javascript.ru/function-basics#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F-pow-x-n

function pow (x,n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);
