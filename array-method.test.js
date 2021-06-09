import { map } from './array-methods.js';

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


