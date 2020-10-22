import toLines from '../toLines';


describe('utils/toLines', () => {
  it('splits a string into an array on newlines', () => {
    const text = 'foo\nbar\nbaz';
    const actual = toLines(text);
    expect(actual).toEqual([
      'foo',
      'bar',
      'baz',
    ]);
  });
});
