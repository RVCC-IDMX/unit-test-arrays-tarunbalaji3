/*
 * arrays-04.js
 * Language: javascript
 * Test: tests/arrays-04.test.js
 * Path: src/arrays-04.js
 *
 * Description:
 *
 */

/**
 * Returns the sum the absolute values of the numbers in the array
 * @param {array} nums - the array of numbers
 * @returns {number} - the sum of the absolute values of the numbers
 * ? example: [2, -1, 4, 8, 10, -21] => 46
 * ? hint: use Math.abs() to get the absolute value of a number
 */
function getAbsoluteSum(nums) {
  // write your code here & return value
}

/**
 * Creates a new array with no strings as elements
 * @param {array} arr - the array with elements with different types
 * @returns {array} - the array with elements with the same type
 * ? example: [1, 'ants', 'bugs', 4, 18] => [1, 4, 18]
 * ? hint: use the filter() array method - https://youtu.be/JY5HUDMudew
 */
function removeStrings(arr) {
  // write your code here & return value
}

/**
 * Finds the minimum and maximum values in the array
 * @param {array} arr - the array of numbers
 * @returns {array} - a new array with 2 elements with the minimum and maximum values,
 *  the minimum value is the first element and the maximum value is the second element
 * ? example: [1, 2, 3, 4, 5] => [1, 5]
 * ? example: [1, 2, 23, 4, 5, -10, 6] => [-10, 23]
 * ?
 * ? We haven't covered how functions and methods can have a variable
 * ? number of arguments passed to it when called but that is how some functions work.
 * ? In these cases, and by using the spread operator (...), we can pass
 * ? an array of elements as individual arguments to a function. - https://bit.ly/39ASLc0
 * ? example: Math.min(...[1, 2, 23, 4, 5, -10, 6]) => -10
 * ? example: Math.max(...[1, 2, 23, 4, 5, -10, 6]) => 23
 * ?
 * ? hint 1: use Math.min() and Math.max() - https://mzl.la/3ucYHl4
 * ? hint 2: use the spread operator with Math.min() and Math.max()
 */
function findMinMax(arr) {
  // write your code here & return value
}

/**
 * Creates a string representation of a telephone number
 * @param {array} numbers - the array with 10 digits of a phone number
 * @returns {string} - the phone number in the format (123) 456-7890
 * ? example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => '(123) 456-7890'
 * ?
 * ? must use the splice() array method - https://youtu.be/ok-dya7hNm0
 * ? must use the join() array method - https://youtu.be/90MVWda5DlM
 * ? must not change the original array - make a shallow copy
 * ?
 * ? hint: Javascript arrays can have different data types as elements
 * ? Since you have to use splice, consider adding the telephone formatting as
 * ? elements to the copied array and then making the array into a string.
 *
 * ? NOTE: Arrays get passed by reference, which means they can be accidentally
 * ? changed inside a function. Unlike slice and concat, splice modifies the array
 * ? on which it is invoked. Since the above says you must not change the original array,
 * ? you should create a shallow copy of the array and use splice on that copy.
 * ? https://bit.ly/39ASLc0
 */
function getTelNo(numbers) {
  // write your code here & return value
}

module.exports = {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
};
