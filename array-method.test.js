import { map, filter } from './array-methods.js';

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
