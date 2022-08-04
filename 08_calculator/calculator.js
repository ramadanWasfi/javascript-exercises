const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  let total = 0;
  for(let i = 0; i < nums.length; i++)
    total += nums[i];
  return total;
};

const multiply = function (nums) {
  let result = 1;
  for(let i = 0; i < nums.length; i++)
    result *= nums[i];
  return result;
};

const power = function (a, b) {
  let result = 1;
  for(let i = 0; i < b; i++) {
    result *= a;
  } 
  return result;
};

const factorial = function (a) {
  let result = 1;
  for(let i = a; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
