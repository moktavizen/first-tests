import { expect, test } from "vitest";
import { calculator, capitalize, reverseString } from "./assignments.js";

test("capitalize(): Only accept string", () => {
  expect(() => capitalize(67)).toThrow("only accept string");
  expect(() => capitalize(true)).toThrow("only accept string");
});

test("capitalize(): Capitalize the first character", () => {
  expect(capitalize("foo")).toBe("Foo");
});

test("capitalize(): Works with different inputs", () => {
  expect(capitalize("bar")).toBe("Bar");
  expect(capitalize("0bar")).toBe("0bar");
});

test("reverseString(): Only accept string", () => {
  expect(() => reverseString(67)).toThrow("only accept string");
  expect(() => reverseString(true)).toThrow("only accept string");
});

test("reverseString(): Reverse the string", () => {
  expect(reverseString("Foo")).toBe("ooF");
});

test("reverseString(): Works with different inputs", () => {
  expect(reverseString("Bar")).toBe("raB");
  expect(reverseString("0Bar")).toBe("raB0");
});

test("calculator.add(): Only accept Numbers", () => {
  expect(() => calculator.add("one", "two")).toThrow("only accept numbers");
  expect(() => calculator.add("8", 8)).toThrow("only accept numbers");
});

test("calculator.add(): Calculate x + y", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(4, -1)).toBe(3);
});

test("calculator.subtract(): Only accept Numbers", () => {
  expect(() => calculator.subtract("one", "two")).toThrow("only accept numbers");
  expect(() => calculator.subtract("8", 8)).toThrow("only accept numbers");
});

test("calculator.subtract(): Calculate x - y", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(4, -1)).toBe(5);
});

test("calculator.divide(): Only accept Numbers", () => {
  expect(() => calculator.divide("one", "two")).toThrow("only accept numbers");
  expect(() => calculator.divide("8", 8)).toThrow("only accept numbers");
});

test("calculator.divide(): Calculate x / y", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(4, -1)).toBe(-4);
});

test("calculator.multiply(): Only accept Numbers", () => {
  expect(() => calculator.multiply("one", "two")).toThrow("only accept numbers");
  expect(() => calculator.multiply("8", 8)).toThrow("only accept numbers");
});

test("calculator.multiply(): Calculate x * y", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(4, -1)).toBe(-4);
});
