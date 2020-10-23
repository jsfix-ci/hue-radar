import flatten from '../flatten';


describe('utils/flatten', () => {
  it('flattens a two-dimensional array', () => {
    const input = [[1], [2, 3], [4], [5]];
    const expected = [1, 2, 3, 4, 5];
    const actual = flatten(input);
    expect(actual).toEqual(expected);
  });
});
