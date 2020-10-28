import { head, tail, flatten } from '../array';


describe('utils/array', () => {
  describe('head', () => {
    it('returns the first item in an array', () => {
      expect(head([1, 2, 3])).toEqual(1);
    });
    it('returns undefined if there is no first item in the array', () => {
      expect(head([])).toBeUndefined();
    });
  });

  describe('tail', () => {
    it('returns the last item in an array', () => {
      expect(tail([1, 2, 3])).toEqual(3);
    });
    it('returns undefined if there are no items in the array', () => {
      expect(tail([])).toBeUndefined();
    });
  });

  describe('flatten', () => {
    it('flattens a two-dimensional array', () => {
      const input = [[1], [2, 3], [4], [5]];
      const expected = [1, 2, 3, 4, 5];
      const actual = flatten(input);
      expect(actual).toEqual(expected);
    });
  });
});
