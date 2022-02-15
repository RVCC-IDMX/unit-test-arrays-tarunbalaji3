/*
 * arrays-03.js
 * Language: javascript
 * Test: tests/arrays-03.test.js
 * Path: src/arrays-03.js
 *
 * Description: Array methods
 * https://bit.ly/3udxkXZ
 *
 * */

/**
 * Adds all the elements of an array together
 * @param {array} arr - the array to convert to a number
 * @returns {number} - the sum of all the elements of the array
 * ? example: [1, 2, 3, 4, 5] => 15
 * ? must use the forEach() array method - https://youtu.be/GNXZpM-15Xg
 */
function addUpArrayElements(arr) {
  // write your code here & return value
}

/**
 * Squares each number if the array
 * @param {array} arr - the passed in array of numbers
 * @returns {array} - a new array with all the elements squared
 * ? example: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
 * ? must use the map() array method - https://youtu.be/nO4fLugOX9k
 */
function makeSquareNumbers(arr) {
  // write your code here & return value
}

/**
 * Filters out words based on length
 * @param {array} arr - the array of words
 * @param {number} length - the length of the word to filter by
 * @returns {array} - a new array with all the words that are longer than
 * the given length
 * ? example: ['yes', 'goodbye', 'no', 'stop', 'maybe'], length = 4
 * ? => ['goodbye', 'maybe']
 * ? must use the filter() array method - https://youtu.be/JY5HUDMudew
 */
function filterForLargeWords(arr, length) {
  // write your code here & return value
}

/**
 * Finds the first even number in an array of integers
 * @param {array} arr - the array of integer numbers
 * @returns {number} - the first even number in the array
 * ? example: [1, 2, 3, 4, 5] => 2
 * ? must use the find() array method - https://youtu.be/KCx0mQEC4Zw
 */
function findTheFirstEvenNumber(arr) {
  // write your code here & return value
}

/**
 * Sorts an array of words alphabetically
 * @param {array} arr - the array of words to sort
 * @returns {array} - a new array with the words sorted in alphabetical order
 * ?  order is ascending and case sensitive
 * ? example: ["ant", "Bug", "cat", "Dog"] => ["Bug","Dog","ant","cat"]
 * ? must use the sort() array method - https://youtu.be/3bLjcUmWveA
 */
function sortCaseSensitive(arr) {
  // write your code here & return value
}

/**
 * Joins together all the elements of an array into a string
 * @param {array} arr  - the array of words to join
 * @param {string} separator - the string to use as a separator
 * @returns {string} - a string with all the words joined together
 * ? example: ["ant", "Bug", "cat", "Dog"], separator = '' => 'antBugcatDog'
 * ? example: ["ant", "Bug", "cat", "Dog"], separator = '-' => 'ant-Bug-cat-Dog'
 * ? must the join() array method - https://youtu.be/90MVWda5DlM
 */
function makeTheString(arr, separator) {
  // write your code here & return value
}

/**
 * Take an array and reverse the elements
 * @param {array} arr - the array to reverse
 * @returns {array} - a new array with the elements reversed
 * ? example: [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
 * ? must use the reverse() array method - https://mzl.la/3EXccdo
 *  must use the reverse on a shallow copy of the original array - https://bit.ly/39ASLc0
 */
function reverseTheArray(arr) {
  // write your code here & return value
}

/**
 * Adds additional elements to the end of an array to make it a mirror
 * @param {array} arr - the array to make into a mirror
 * @returns {array} - a new array with the elements added to mirror the original
 * ? example: [ 1, 2, 3] => [1, 2, 3, 2, 1]
 * ? example: [ 1, 2, 3, 4] => [1, 2, 3, 4, 3, 2, 1]
 * ? must use the concat() array method - https://bit.ly/3lZkNE2
 */
function makeMirrorArray(arr) {
  // write your code here & return value
}

/**
 * Creates a slice of array with n elements dropped from the end
 * @param {array} arr - the array
 * @param {number} n - the number (integer) of elements at the end to drop
 * @returns {array} - a new array with the n elements dropped from the end
 * ? example: [1, 2, 3, 4, 5], n = 2 => [1, 2, 3]
 * ? example: [1, 2, 3, 4, 5], n = 3 => [1, 2]
 * ? must use the slice() array method - https://youtu.be/ok-dya7hNm0
 */
function dropRight(arr, n) {
  // write your code here & return value
}

/**
 * Creates a slice of array with n elements dropped from the beginning
 * @param {array} arr - the array
 * @param {number} n - the number of elements to take from the beginning
 * @returns {array} - a new array with the n elements taken from the beginning
 * ? example: [1, 2, 3, 4, 5], n = 2 => [3, 4, 5]
 * ? example: [1, 2, 3, 4, 5], n = 3 => [4, 5]
 * ? must use the slice() array method - https://youtu.be/ok-dya7hNm0
 */
function dropLeft(arr, n) {
  // write your code here & return value
}

/**
 * Checks if an array contains a given number
 * @param {array} arr the array to check
 * @param {*} val - the test value to check
 * @returns {boolean} - true if the array contains the value, false otherwise
 * ? example: [1, 2, 3, 4, 5], val = 3 => true
 * ? example: [1, 2, 3, 4, 5], val = 6 => false
 * ? must use the includes() array method - https://youtu.be/GNnHej31OGY
 */
function checkArrayForValue(arr, val) {
  // write your code here & return value
}

module.exports = {
  addUpArrayElements,
  makeSquareNumbers,
  filterForLargeWords,
  findTheFirstEvenNumber,
  sortCaseSensitive,
  makeTheString,
  reverseTheArray,
  makeMirrorArray,
  dropRight,
  dropLeft,
  checkArrayForValue,
};
