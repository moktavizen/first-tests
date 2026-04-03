import { describe, expect, test } from "vitest";
import { calculator, capitalize, reverseString } from "./assignments.js";

describe("capitalize()", () => {
  test("Only accept string", () => {
    expect(() => capitalize(67)).toThrow("only accept string");
    expect(() => capitalize(true)).toThrow("only accept string");
  });

  test("Capitalize the first character", () => {
    expect(capitalize("foo")).toBe("Foo");
  });

  test("Works with different inputs", () => {
    expect(capitalize("bar")).toBe("Bar");
    expect(capitalize("0bar")).toBe("0bar");
  });
});

describe("reverseString()", () => {
  test("Only accept string", () => {
    expect(() => reverseString(67)).toThrow("only accept string");
    expect(() => reverseString(true)).toThrow("only accept string");
  });

  test("Reverse the string", () => {
    expect(reverseString("Foo")).toBe("ooF");
  });

  test("Works with different inputs", () => {
    expect(reverseString("Bar")).toBe("raB");
    expect(reverseString("0Bar")).toBe("raB0");
  });
});

describe("calculator", () => {
  describe("add()", () => {
    test("Only accept Numbers", () => {
      expect(() => calculator.add("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.add("8", 8)).toThrow("only accept numbers");
    });

    test("Calculate x + y", () => {
      expect(calculator.add(2, 2)).toBe(4);
      expect(calculator.add(4, -1)).toBe(3);
    });
  });

  describe("subtract()", () => {
    test("Only accept Numbers", () => {
      expect(() => calculator.subtract("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.subtract("8", 8)).toThrow("only accept numbers");
    });

    test("Calculate x - y", () => {
      expect(calculator.subtract(2, 2)).toBe(0);
      expect(calculator.subtract(4, -1)).toBe(5);
    });
  });

  describe("divide()", () => {
    test("Only accept Numbers", () => {
      expect(() => calculator.divide("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.divide("8", 8)).toThrow("only accept numbers");
    });

    test("Calculate x / y", () => {
      expect(calculator.divide(2, 2)).toBe(1);
      expect(calculator.divide(4, -1)).toBe(-4);
    });
  });

  describe("multiply()", () => {
    test("Only accept Numbers", () => {
      expect(() => calculator.multiply("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.multiply("8", 8)).toThrow("only accept numbers");
    });

    test("Calculate x * y", () => {
      expect(calculator.multiply(2, 2)).toBe(4);
      expect(calculator.multiply(4, -1)).toBe(-4);
    });
  });
});
