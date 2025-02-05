//Implement saem test defined in 00-imperative/getLongWords.test.js
import { describe, it, expect } from "vitest";
import getLongWords from "./getLongWords.js";

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];
const SHORT_WORDS = ["a", "bb", "ccc", "dddd"];
const ALL_LONG_WORDS = ["JavaScript", "TypeScript", "Python"];
const EMPTY_ARRAY = [];
const MIXED_LENGTH_WORDS = ["short", "tiny", "adequate", "sufficient"];

describe("getLongWords", () => {
    it("should return long words from LANGUAGES array", () => {
        const output = getLongWords(LANGUAGES);
        expect(output).toEqual(["JavaScript", "TypeScript"]);
    });

    it("should return long words from BEATLES array", () => {
        const output = getLongWords(BEATLES);
        expect(output).toEqual(["George", "Ringo"]);
    });

    it("should return an empty array if no words are long enough", () => {
        const output = getLongWords(SHORT_WORDS);
        expect(output).toEqual([]);
    });

    it("should return the same array if all words are long enough", () => {
        const output = getLongWords(ALL_LONG_WORDS);
        expect(output).toEqual(["JavaScript", "TypeScript", "Python"]);
    });

    it("should handle an empty input array", () => {
        const output = getLongWords(EMPTY_ARRAY);
        expect(output).toEqual([]);
    });

    it("should handle an array with mixed length words", () => {
        const output = getLongWords(MIXED_LENGTH_WORDS);
        expect(output).toEqual(["short", "adequate", "sufficient"]);
    });
});
