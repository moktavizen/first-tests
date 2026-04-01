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
