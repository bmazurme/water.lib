import index from '.';

test('convert joule to calories', () => {
  expect(index(1)).toEqual(0.0008598);
});
