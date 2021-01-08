import {add} from './draft'
const fetch = require('isomorphic-fetch');

describe('test opportunities', () => {
  test('test to check imports', () => {
    const sum = add(1, 2);
    const expectedResult = 3;
    expect(sum).toEqual(expectedResult);
  });

  test('test to check fetch', async () => {
    let timeline;
    const value = await fetch('https://covid19-api.org/api/timeline')
      .then((data) => data.json())
      .then((data) => {
        timeline = data;
        return true;
      });
    expect(timeline[0]).not.toBeUndefined();
    expect(value).toBe(true);
  });
});
