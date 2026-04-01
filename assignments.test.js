import { expect, test } from "vitest";
import { capitalize, reverseString } from "./assignments.js";

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
