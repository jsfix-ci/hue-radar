import * as fs from '../fs';


describe('utils/fs', () => {
  describe('writeJSONFile', () => {
    const sampleJSON = {
      foo: 'foo',
      bar: 'bar',
    };
    const sampleStringified = '{\n  "foo": "foo",\n  "bar": "bar"\n}';
    it('stringifies the provided JSON object and writes it to disk', async () => {
      const writeFileSpy = jest.spyOn(fs, 'writeFile').mockImplementation();
      const mockPath = 'mock.json';
      await fs.writeJSONFile(mockPath, sampleJSON);
      expect(writeFileSpy).toHaveBeenCalledWith(mockPath, sampleStringified);
    });
  });
});
