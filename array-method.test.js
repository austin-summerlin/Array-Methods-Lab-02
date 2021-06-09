import { map, filter, findIndex, reduce } from './array-methods.js';

describe('map', () => {
  it('map through and multiply each value in array by 2', () => {
    const input = [
      [0, 3, 7, 10],
      n => n * 2
    ];
    const actual = map(...input);
    const expected = [0, 6, 14, 20];
    expect(actual).toEqual(expected);
  });

});

describe('filter', () => {
  it('filters out the even numbers', () => {
    const input = [
      [2, 4, 5, 34, 55, 66, 77],
      n => n % 2
    ];
    const actual = filter(...input);
    const expected = [5, 55, 77];

    expect(actual).toEqual(expected);
  });
});

describe('findIndex', () => {
  it('returns the index of the first item whose callback returns true', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const index = findIndex(arr, (item) => item === 2);
    expect(index).toEqual(2);
  });
});

describe('reduce', () => {
  it('returns the final accumulator value without an initial value', () => {
    const input = [
      [1, 2, 3, 4, 5],
      (acc, item) => acc += item
    ];
    const actual = reduce(...input);
    const expected = 16;
    expect(actual).toEqual(expected);
  });
});

