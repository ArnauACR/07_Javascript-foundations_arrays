import { describe, it, expect } from "vitest";
import transformSecondsToWords from "./transformSecondsToWords.js";

const SECONDS = [2, 5, 100];
const EMPTY_SECONDS_LIST = [];
const SINGLE_SECOND_LIST = [42];
const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];
const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];

describe("transformSecondsToWords", () => {
  it("should transform an array of seconds to an array of strings", () => {

    const output = transformSecondsToWords(SECONDS);

    expect(output).toEqual(["2", "5", "100"]);

  });

  it("should handle an empty array", () => {

    const output = transformSecondsToWords(EMPTY_SECONDS_LIST);

    expect(output).toEqual([]);

  });

  it("should handle an array with one element", () => {

    const output = transformSecondsToWords(SINGLE_SECOND_LIST);

    expect(output).toEqual(["42"]);

  });

  it("should handle an array with zero", () => {

    const output = transformSecondsToWords(SINGLE_SECONDS_LIST_WITH_VALUE_ZERO);

    expect(output).toEqual(["0"]);
  });

  it("should handle an array with negative numbers", () => {

    const output = transformSecondsToWords(SECONDS_LIST_WITH_NEGATIVE_VALUES);

    expect(output).toEqual(["-1", "-60", "-3600"]);

  });
});
