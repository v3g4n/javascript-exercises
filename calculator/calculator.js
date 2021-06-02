const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach((num) => total += num);
  return total;
};

const multiply = function(arr) {
  total = 1;
  arr.forEach((num) => total *= num);
  return total;
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  return factorial(num - 1) * num;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
