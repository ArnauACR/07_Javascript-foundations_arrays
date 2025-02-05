import { describe, it, expect } from "vitest";
import getEvensOnly from "./getEvensOnly.js";

const NUMBERS = [2, 25, 43, 12, 67, 42, 28];
const EMPTY_NUMBERS_LIST = [];
const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];
const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];
const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];
const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];

describe("getEvensOnly", () => {
  it("should return only even numbers from the array",() => {

    const output = getEvensOnly(NUMBERS);

    expect(output).toEqual([2, 12, 42, 28]);
  });

  it("should handle an empty array",() => {

    const output = getEvensOnly(EMPTY_NUMBERS_LIST);

    expect(output).toEqual([]);
  });

  it("should handle an array with no even numbers",() => {

    const output = getEvensOnly(NUMBERS_LIST_WITHOUT_EVEN_VALUES);

    expect(output).toEqual([]);
  });

  it("should handle an array with all even numbers",() => {

    const output = getEvensOnly(NUMBERS_LIST_WITH_ALL_EVEN_VALUES);

    expect(output).toEqual([2, 4, 6, 8, 10]);
  });

  it("should handle an array with negative even numbers",() => {

    const output = getEvensOnly(NUMBERS_LIST_WITH_NEGATIVE_VALUES);

    expect(output).toEqual([-2, -4, -6, -8, -10]);
  });

  it("should handle an array with mixed positive and negative even numbers",() => {

    const output = getEvensOnly(NUMBERS_LIST_WITH_MIXED_VALUES);

    expect(output).toEqual([4, -6, 8, -10]);
  });
});
