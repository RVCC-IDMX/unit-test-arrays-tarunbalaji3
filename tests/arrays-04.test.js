const {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
} = require('../src/arrays-04');

test('getAbsoluteSum', () => {
  expect(getAbsoluteSum([1, 2, 3])).toBe(6);
  expect(getAbsoluteSum([-1, -2, -3])).toBe(6);
  expect(getAbsoluteSum([1, -2, 3])).toBe(6);
  expect(getAbsoluteSum([0, -0])).toBe(0);
});

test('removeStrings', () => {
  expect(removeStrings([1, 'ants', 'bugs', 4, 18])).toEqual([1, 4, 18]);
  expect(removeStrings(['a', 'b', 'c'])).toEqual([]);
  const sampleArray = [1, 2, 3];
  expect(removeStrings(sampleArray)).not.toBe(sampleArray);
});

test('findMinMax', () => {
  expect(findMinMax([1, 2, 33, 10])).toEqual([1, 33]);
  expect(findMinMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
  expect(findMinMax([1, 10])).toEqual([1, 10]);
  const sampleArray = [1, 2];
  expect(findMinMax(sampleArray)).not.toBe(sampleArray);
});

test('getTelNo', () => {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const checkArray = [...sampleArray];
  expect(getTelNo(sampleArray)).toBe('(123) 456-7890');
  expect(sampleArray).toEqual(checkArray);
});
