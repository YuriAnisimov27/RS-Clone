function remember() {
  let t = {};
  let f = null;

  t || console.log('|| t');
  f || console.log('|| f');
  t && console.log('&& t');
  f && console.log('&& f');
  console.log(4);
}

// if (candidate) {
//   return res.status(400).json({message: 'User with this email already exists'});
// }
// a: ref="noopener noreferrer"

export const add = (a, b) => a + b;


describe('test opportunities', () => {
  test('test to check imports', () => {
    const sum = add(1, 2);
    const expectedResult = 3;
    expect(sum).toEqual(expectedResult);
  });

  test('test to check fetch', async () => {
    let timeline;
    const value = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((data) => data.json())
      .then((data) => {
        timeline = data;
        return true;
      });
    expect(value).toBe(true);
  });
});
