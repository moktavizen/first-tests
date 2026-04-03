import { describe, expect, it } from "vitest";
import { calculator, capitalize, reverseString } from "./assignments.js";

describe("capitalize()", () => {
  it("Only accept string", () => {
    expect(() => capitalize(67)).toThrow("only accept string");
    expect(() => capitalize(true)).toThrow("only accept string");
  });

  it("Capitalize the first character", () => {
    expect(capitalize("foo")).toBe("Foo");
  });

  it("Works with different inputs", () => {
    expect(capitalize("bar")).toBe("Bar");
    expect(capitalize("0bar")).toBe("0bar");
  });
});

describe("reverseString()", () => {
  it("Only accept string", () => {
    expect(() => reverseString(67)).toThrow("only accept string");
    expect(() => reverseString(true)).toThrow("only accept string");
  });

  it("Reverse the string", () => {
    expect(reverseString("Foo")).toBe("ooF");
  });

  it("Works with different inputs", () => {
    expect(reverseString("Bar")).toBe("raB");
    expect(reverseString("0Bar")).toBe("raB0");
  });
});

describe("calculator", () => {
  describe("add()", () => {
    it("Only accept Numbers", () => {
      expect(() => calculator.add("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.add("8", 8)).toThrow("only accept numbers");
    });

    it("Calculate x + y", () => {
      expect(calculator.add(2, 2)).toBe(4);
      expect(calculator.add(4, -1)).toBe(3);
    });
  });

  describe("subtract()", () => {
    it("Only accept Numbers", () => {
      expect(() => calculator.subtract("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.subtract("8", 8)).toThrow("only accept numbers");
    });

    it("Calculate x - y", () => {
      expect(calculator.subtract(2, 2)).toBe(0);
      expect(calculator.subtract(4, -1)).toBe(5);
    });
  });

  describe("divide()", () => {
    it("Only accept Numbers", () => {
      expect(() => calculator.divide("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.divide("8", 8)).toThrow("only accept numbers");
    });

    it("Calculate x / y", () => {
      expect(calculator.divide(2, 2)).toBe(1);
      expect(calculator.divide(4, -1)).toBe(-4);
    });
  });

  describe("multiply()", () => {
    it("Only accept Numbers", () => {
      expect(() => calculator.multiply("one", "two")).toThrow("only accept numbers");
      expect(() => calculator.multiply("8", 8)).toThrow("only accept numbers");
    });

    it("Calculate x * y", () => {
      expect(calculator.multiply(2, 2)).toBe(4);
      expect(calculator.multiply(4, -1)).toBe(-4);
    });
  });
});
