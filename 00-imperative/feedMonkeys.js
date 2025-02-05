//const MONKEYS = ["🐒", "🦍", "🦧"];
//"🐒🍌", "🦍🍌", "🦧🍌"
/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 */

/**
 * Feeds monkeys with the specified fruit.
 *
 * @param {string[]} monkeysList - An array of monkey names.
 * @param {string} fruit - The type of fruit to feed the monkeys.
 * @returns {string[]} An array of strings indicating each monkey has been fed with the specified fruit.
 */
const MONKEYS = ["🐒", "🦍", "🦧"];

function feedMonkeys(monkeysList, fruit){
   const newMonkeyList = []

    if(!fruit){
        return newMonkeyList;
    }

    for (let index = 0; index < monkeysList.length; index++) {
        const monkey = monkeysList[index];

        const monkeyFruit = monkey + fruit;

        newMonkeyList.push(monkeyFruit);
    }

    return newMonkeyList;
}

export default feedMonkeys;
