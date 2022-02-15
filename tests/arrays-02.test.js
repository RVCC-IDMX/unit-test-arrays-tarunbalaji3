const {
  findTheCharacterAtIndex,
  sliceTheString,
  splitTheString,
  makeAllUpperCase,
  makeAllLowerCase,
  makeWordTitleCase,
  replaceTheString,
  makeSentenceTitleCase,
} = require('../src/arrays-02');

test('findTheCharacterAtIndex', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(findTheCharacterAtIndex(str, 0)).toBe('a');
  expect(findTheCharacterAtIndex(str, 25)).toBe('z');
});

test('sliceTheString', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(sliceTheString(str, 0, 3)).toBe('abc');
  expect(sliceTheString(str, 3, 6)).toBe('def');
});

test('splitTheString', () => {
  const str = 'Time will not slow down when something unpleasant lies ahead';
  expect(splitTheString(str, ' ')).toEqual([
    'Time',
    'will',
    'not',
    'slow',
    'down',
    'when',
    'something',
    'unpleasant',
    'lies',
    'ahead',
  ]);
});

test('makeAllUpperCase', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(makeAllUpperCase(str)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});

test('makeAllLowerCase', () => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  expect(makeAllLowerCase(str)).toBe('abcdefghijklmnopqrstuvwxyz');
});

test('makeWordTitleCase', () => {
  let word = 'california';
  expect(makeWordTitleCase(word)).toBe('California');
  word = 'CaliFORnia';
  expect(makeWordTitleCase(word)).toBe('California');
});

test('replaceTheString', () => {
  const sentence = 'The quick brown fox jumps over the lazy dog';
  expect(replaceTheString(sentence, 'quick', 'slow')).toBe(
    'The slow brown fox jumps over the lazy dog'
  );
});

test('makeSentenceTitleCase', () => {
  const sentence = 'the quick brown fox jumps over the lazy dog';
  expect(makeSentenceTitleCase(sentence)).toBe(
    'The Quick Brown Fox Jumps Over The Lazy Dog'
  );
});
