const COMMA = ',';

//  Call .trim() on a given string
function trim(str: string): string {
  return str.trim();
}

/**
 * Splits a given glob string (from user input) into parts.
 *
 * @param {string} globs - A comma-separated list of globs.
 */
export default function splitGlob(globs: string): string[] {
  return globs.split(COMMA).map(trim);
}
