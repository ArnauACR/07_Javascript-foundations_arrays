import { describe, it, expect } from "vitest";
import createLocalesSettings from "./createLocalesSettings.js";

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
const EMPTY_LOCALES = [];
const SINGLE_LOCALE = ["EN"];
const DUPLICATE_LOCALES = ["EN", "EN", "FR", "FR"];

describe("createLocalesSettings", () => {
    it("should create locales settings with the first locale enabled and the rest disabled", () => {
        const output = createLocalesSettings(LOCALES);
        expect(output).toEqual({
          "EN": { id: 0, enabled: true },
          "GR": { id: 1, enabled: false },
          "FR": { id: 2, enabled: false },
          "IT": { id: 3, enabled: false },
          "PT": { id: 4, enabled: false }
        });
      });
    
      it("should handle an empty array", () => {
        const output = createLocalesSettings(EMPTY_LOCALES);
        expect(output).toEqual({});
      });
    
      it("should handle an array with one locale", () => {
        const output = createLocalesSettings(SINGLE_LOCALE);
        expect(output).toEqual({
          "EN": { id: 0, enabled: true }
        });
      });
    
      it("should handle an array with duplicate locales", () => {
        const output = createLocalesSettings(DUPLICATE_LOCALES);
        expect(output).toEqual({
          "EN": { id: 1, enabled: false },
          "FR": { id: 3, enabled: false }
        });
      });
    });
    
