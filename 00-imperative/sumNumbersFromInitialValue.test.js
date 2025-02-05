import { describe, it, expect } from "vitest";
import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";

const EMPTY_NUMBERS_LIST = [];
const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;
const initialAccumulatedValueAsOneHundred = 100;

describe("sumNumbersFromInitialValue", () => {
    it("should return the correct sum with initial value 0", () => {
        const output = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsZero);
        expect(output).toBe(15);
    });

    it("should return the correct sum with initial value 10", () => {
        const output = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsTen);
        expect(output).toBe(25);
    });

    it("should return the initial value if the list is empty", () => {
        const output = sumNumbersFromInitialValue(EMPTY_NUMBERS_LIST, initialAccumulatedValueAsTen);
        expect(output).toBe(10);
    });

    it("should handle negative numbers in the list", () => {
        const output = sumNumbersFromInitialValue(NEGATIVE_NUMBERS_LIST, initialAccumulatedValueAsZero);
        expect(output).toBe(-15);
    });

    it("should handle a mix of positive and negative numbers", () => {
        const output = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero);
        expect(output).toBe(3);
    });

    it("should handle an initial value of 0", () => {
        const output = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero);
        expect(output).toBe(3);
    });

    it("should handle an initial value of 100", () => {
        const output = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsOneHundred);
        expect(output).toBe(115);
    });
});
