import { endsWithExtension,
  stripExtension,
  ensureCorrectExtension } from '../fileExtension';


describe('utils/fileExtension', () => {
  describe('endsWithExtension', () => {
    it('returns true for "normal" file paths like ".json"', () => {
      expect(endsWithExtension('path/to/file.json')).toBe(true);
      expect(endsWithExtension('path/to/file.html')).toBe(true);
      expect(endsWithExtension('path/to/file.png')).toBe(true);
      expect(endsWithExtension('path/to/file.c')).toBe(true);
      expect(endsWithExtension('path/to/file.svelte')).toBe(true);
    });
    it('returns false when there is no file extension', () => {
      expect(endsWithExtension('path/to/file')).toBe(false);
      expect(endsWithExtension('path/to/directory/')).toBe(false);
    });
    it('returns true for edge-cases, such as a dot in the file name', () => {
      expect(endsWithExtension('path/to/w.e.i.r.d.f.i.l.e')).toBe(true);
    });
  });
  describe('stripExtension', () => {
    it('returns the original string if it does not end with an extension', () => {
      expect(stripExtension('path/to/file')).toEqual('path/to/file');
      expect(stripExtension('path/to/')).toEqual('path/to/');
    });
    it('returns the the path without the file extension if it exists', () => {
      const mockFilePath = 'path/to/file.json';
      expect(stripExtension(mockFilePath)).toEqual('path/to/file');
    });
  });
  describe('ensureCorrectExtension', () => {
    it('returns the original string if it already ends with the extension', () => {
      const mockJSONFilePath = 'path/to/file.json';
      expect(ensureCorrectExtension(mockJSONFilePath, 'json')).toEqual(mockJSONFilePath);
      const mockHTMLFilePath = 'path/to/file.html';
      expect(ensureCorrectExtension(mockHTMLFilePath, 'html')).toEqual(mockHTMLFilePath);
    });
    it('appends an extensionless path with the correct extension', () => {
      const mockFilePath = 'path/to/file';
      expect(ensureCorrectExtension(mockFilePath, 'json')).toEqual(`${mockFilePath}.json`);
      expect(ensureCorrectExtension(mockFilePath, 'html')).toEqual(`${mockFilePath}.html`);
    });
    it('removes any junk extension and replaces it with the correct one', () => {
      expect(ensureCorrectExtension('path/to/file.json', 'html')).toEqual('path/to/file.html');
      expect(ensureCorrectExtension('path/to/file.png', 'html')).toEqual('path/to/file.html');
      expect(ensureCorrectExtension('path/to/file.svelte', 'html')).toEqual('path/to/file.html');
    });
  });
});
