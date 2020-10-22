import splitGlob from '../splitGlob';


describe('utils/splitGlob', () => {
  it('returns an array of strings from a comma-separated glob string', () => {
    const mockGlob = '**.js,**.less';
    const actual = splitGlob(mockGlob);
    expect(actual).toEqual([
      '**.js',
      '**.less',
    ]);
  });
  it('trims whitespaces from returned globs', () => {
    const mockGlob = '  **.js,  **.less    ,!secret-file.txt   ,  */tests/**';
    const actual = splitGlob(mockGlob);
    expect(actual).toEqual([
      '**.js',
      '**.less',
      '!secret-file.txt',
      '*/tests/**',
    ]);
  });
});
