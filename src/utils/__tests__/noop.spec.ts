import noop from '../noop';


describe('utils/noop', () => {
  it('does nothing and returns void (undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
