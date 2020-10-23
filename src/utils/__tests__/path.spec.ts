import { resolveCwd } from '../path';


describe('utils/path', () => {
  describe('resolveCwd', () => {
    it('should correctly resolve a path relative to the current working directory', () => {
      //  NOTE: mocking this out doesn't work, because Jest relies on process.cwd().
      //  See more: https://github.com/facebook/jest/issues/5146
      const cwd = process.cwd();
      const mockInputPath = 'src/styles';
      const actual = resolveCwd(mockInputPath);
      expect(actual).toEqual(`${cwd}/${mockInputPath}`);
    });
  });
});
