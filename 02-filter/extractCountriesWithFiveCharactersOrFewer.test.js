import { describe, it, expect } from "vitest";
import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js";

const EMPTY_COUNTRIES_ARRAY = [];
const COUNTRIES_WITH_NO_SHORT_NAMES = ["United Kingdom", "Portugal", "Greece"];
const COUNTRIES_WITH_ALL_SHORT_NAMES = ["Italy", "Spain", "Japan"];
const COUNTRIES_WITH_MIXED_LENGTH = [
  "United Kingdom",
  "Italy",
  "France",
  "Portugal",
  "Greece",
];

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  it("should return countries with five characters or fewer",() => {

    const output = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_ALL_SHORT_NAMES);

    expect(output).toEqual(["Italy", "Spain", "Japan"])
  });

  it("should handle an empty array of countries",() => {

    const output = extractCountriesWithFiveCharactersOrFewer(EMPTY_COUNTRIES_ARRAY);

    expect(output).toEqual([]);
  });

  it("should handle an array with no countries having five characters or fewer",() => {

    const output = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_NO_SHORT_NAMES);

    expect(output).toEqual([]);
  });

  it("should handle an array with all countries having five characters or fewer",() => {

        const output = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_MIXED_LENGTH);

        expect(output).toEqual(["Italy"])
    });
});
