/*
 * arrays-02.js
 * Language: javascript
 * Test: tests/arrays-02.test.js
 * Path: src/arrays-02.js
 *
 * Description: String methods
 * Textbook: https://bit.ly/3AEQg4x
 *
 * ? Strings are primitive data types and arrays are objects (passed by reference).
 * ?
 * ? But many string methods treat strings as if they are arrays of characters.
 * ? A big difference is that the string methods are not destructive because
 * ? they must return a new string.
 * ?
 * ? This means methods like replace() and toUpperCase() return new strings:
 * ? they cannot modify the string on which they are invoked because strings are immutable.
 *
 * ? The more popular string methods are:
 * ? - charAt()
 * ? - charCodeAt()
 * ? - concat()
 * ? - indexOf()
 * ? - lastIndexOf()
 * ? - slice()
 * ? - substring()
 * ? - toLowerCase()
 * ? - toUpperCase()
 * ? - trim()
 * ? - valueOf()
 * ? - length - not a method but a property
 * ? - split()
 * ? - replace()
 * ? refer to the textbook for more details https://bit.ly/3AEQg4x
 * */

/**
 * Finds the character at the specified index
 * @param {string} str - the string to be searched
 * @param {number} indx - the index of the string
 * @returns {string} - the character at the index
 */
function findTheCharacterAtIndex(str, indx) {
  // write your code here & return value
}

/**
 * Slice a string
 * @param {string} str - the string
 * @param {number} start - the start index
 * @param {number} end - the end index
 * @returns {string} - the sliced string
 */
function sliceTheString(str, start, end) {
  // write your code here & return value
}

/**
 * Splits a string into an array of substrings
 * @param {string} str - the string
 * @param {string} separator - the separator
 * @returns {array} - the array of substrings
 */
function splitTheString(str, separator) {
  // write your code here & return value
}

/**
 * Returns a string all in uppercase
 * @param {string} str - the string
 * @returns {string} - the string with all the letters in uppercase
 */
function makeAllUpperCase(str) {
  // write your code here & return value
}

/**
 * Returns a string all in lowercase
 * @param {string} str - the string
 * @returns {string} - the string with all the letters lowercase
 */
function makeAllLowerCase(str) {
  // write your code here & return value
}

/**
 * Returns a word with its first letter capitalized and all other letters in lowercase
 * @param {string} word - a single word
 * @returns {string} - the string with all the letters lowercase expect the first one
 * which is uppercase
 * ? ex: 'hello' => 'Hello'
 * ? ex: 'HELLO' => 'Hello'
 */
function makeWordTitleCase(word) {
  // write your code here & return value
}

/**
 * Returns a string with some of it replaced
 * @param {string} str - the string
 * @param {string} oldStr - the string to be replaced
 * @param {string} newStr - the string to replace the old string
 * @returns {string} - the string with the old string replaced by the new string
 * ? ex: 'hello world', 'hello', 'hi' => 'hi world'
 */
function replaceTheString(str, oldStr, newStr) {
  // write your code here & return value
}

/**
 * Returns a string with the first letter of each word capitalized
 * @param {string} sentence - the sentence
 * @returns {string} - the sentence with all the words capitalized
 * ? ex: 'hello world' => 'Hello World'
 * ? NOTE: this is more challenging than the others have been
 * ? hint: use split() and makeWordTitleCase()
 */
function makeSentenceTitleCase(sentence) {
  // write your code here & return value
}

module.exports = {
  findTheCharacterAtIndex,
  sliceTheString,
  splitTheString,
  makeAllUpperCase,
  makeAllLowerCase,
  makeWordTitleCase,
  replaceTheString,
  makeSentenceTitleCase,
};
