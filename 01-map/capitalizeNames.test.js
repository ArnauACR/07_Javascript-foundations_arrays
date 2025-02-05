import { describe, it, expect } from "vitest";
import capitalizeNames from "./capitalizeNames.js";

const NAMES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const EMPTY_NAMES_LIST = [];
const CAPITALIZED_NAMES = ["John", "Jacob", "Jingleheimer", "Schmidt"];
const UPPERCASED_NAMES = ["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"];
const LOWERCASED_NAMES = ["john", "jacob", "jingleheimer", "schmidt"];
const MIXED_CAPITALIZED_NAMES = ["jOhN", "JaCoB", "jInGlEhEiMeR", "sChMiDt"];

describe("capitalizeMates", () => {
  it("should capitalize all names in the array",() => {

    const output = capitalizeNames(NAMES);

    expect(output).toEqual(CAPITALIZED_NAMES);

  });

  it("should handle an empty array",() => {

    const output = capitalizeNames(EMPTY_NAMES_LIST);

    expect(output).toEqual(EMPTY_NAMES_LIST);
  });
  it("should handle names that are already capitalized correctly",() => {

    const output = capitalizeNames(CAPITALIZED_NAMES);

    expect(output).toEqual(CAPITALIZED_NAMES);

  });

  it("should handle names that are all uppercase",() => {

    const output = capitalizeNames(UPPERCASED_NAMES);

    expect(output).toEqual(CAPITALIZED_NAMES);

  });

  it("should handle names that are all lowercase",() => {

    const output = capitalizeNames(LOWERCASED_NAMES);

    expect(output).toEqual(CAPITALIZED_NAMES);

  });

  it("should handle names with mixed casing",() => {
    const output = capitalizeNames(MIXED_CAPITALIZED_NAMES);

    expect(output).toEqual(CAPITALIZED_NAMES);

  });
});
