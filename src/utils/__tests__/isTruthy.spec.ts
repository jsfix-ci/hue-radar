import isTruthy from '../isTruthy';


describe('utils/isTruthy', () => {
  it('returns true for truthy values', () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy('yes')).toBe(true);
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy({})).toBe(true);
    expect(isTruthy([])).toBe(true);
  });
  it('returns false for falsey values', () => {
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy('')).toBe(false);
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(undefined)).toBe(false); // eslint-disable-line unicorn/no-useless-undefined
  });
});
