import * as globby from 'globby';
import splitGlob from '../utils/splitGlob';


export const DEFAULT_GLOBS = ['**.css', '!node_modules/**/*'];

const GLOBBY_OPTIONS = {
  cwd: process.cwd(),
  expandDirectories: true,
  gitignore: true,
};

/**
 * Wrapper for globby to return a list of files to search on.
 *
 * @param {string} globs - String of globs to include
 */
async function getGlobs(globs: string) {
  return globby([
    ...DEFAULT_GLOBS,
    ...splitGlob(globs),
  ], GLOBBY_OPTIONS);
}

export default getGlobs;
