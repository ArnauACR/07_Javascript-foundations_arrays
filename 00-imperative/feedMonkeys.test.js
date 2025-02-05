import { describe, it, expect } from "vitest";
import feedMonkeys from "./feedMonkeys";

const MONKEYS_LIST = ["🐒", "🦍", "🦧"];
const apple = "🍎";
const banana = "🍌";
const grape = "🍇";
const specialCharacters = "🍉🍇";

describe("feedMonkeys", () => {
  it("should feed monkeys with bananas", () => {
    //arrange
    //act
    const output = feedMonkeys(MONKEYS_LIST, banana)
    //assert
    expect(output).toEqual(["🐒🍌", "🦍🍌", "🦧🍌"])
    });

  it("should feed monkeys with apples", () => {
    
    const output = feedMonkeys(MONKEYS_LIST, apple)

    expect(output).toEqual(["🐒🍎", "🦍🍎", "🦧🍎"])
  })

  it("should feed monkeys with grapes", () => {
    
    const output = feedMonkeys(MONKEYS_LIST, grape)

    expect(output).toEqual(["🐒🍇", "🦍🍇", "🦧🍇"])
  })

  it("should return an empty array if no fruit is provided", () => {

    const output = feedMonkeys()

    expect(output).toEqual([])
  })

  it("should handle feeding monkeys with special characters", () => {
    const output = feedMonkeys(MONKEYS_LIST, specialCharacters)

    expect(output).toEqual(["🐒🍉🍇", "🦍🍉🍇", "🦧🍉🍇"])

  });
});
