// const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
// const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 */

/**
 * Returns an array of strings with length equal or greater than 5.
 *
 * @param {string[]} wordsList - The array of words to filter.
 * @returns {string[]} An array containing words with length equal or greater than 5.
 */
function getLongWords(wordsList) {
    const longWords = [];

    if (!wordsList || wordsList.length === 0) {
        return longWords;
    }

    for (let index = 0; index < wordsList.length; index++) {
        const word = wordsList[index];
        if (word.length >= 5) {
            longWords.push(word);
        }
    }

    return longWords;
}

export default getLongWords;
