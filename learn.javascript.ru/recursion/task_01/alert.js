// Script for task #1 from https://learn.javascript.ru/recursion#%D0%B2%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D1%83%D0%BC%D0%BC%D1%83-%D1%87%D0%B8%D1%81%D0%B5%D0%BB-%D0%B4%D0%BE-%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE

function sumTo(num) {
  return (num === 1) ? num : num + sumTo(num - 1);
}

console.log(sumTo(2));
console.log(sumTo(100));
