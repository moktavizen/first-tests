// Takes a string and returns it with the first character capitalized
export function capitalize(str) {
  if (typeof str !== "string") throw new Error("capitalize() only accept string as input!");

  return str.at(0).toUpperCase() + str.slice(1);
}

// Takes a string and returns it reversed
export function reverseString(str) {
  if (typeof str !== "string") throw new Error("reverseString() only accept string as input!");

  return str.split("").reverse().join("");
}

// Contains functions for the basic operations: add, subtract, divide, and
// multiply. Each of these functions should take two numbers and return the
// correct calculation.
export const calculator = {
  checkParams(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("calculator methods only accept numbers");
    }
  },
  add(x, y) {
    this.checkParams(x, y);
    return x + y;
  },
  subtract(x, y) {
    this.checkParams(x, y);
    return x - y;
  },
  divide(x, y) {
    this.checkParams(x, y);
    return x / y;
  },
  multiply(x, y) {
    this.checkParams(x, y);
    return x * y;
  },
};
