import regex from '../helpers/regex';
import isTruthy from '../utils/isTruthy';
import toLines from '../utils/toLines';
import type { Color } from '../types';

/**
 * Extract the colors from a given "line" or string of text.
 *
 * @param {string} line - A given "line" or string of text
 */
export function getColorsFromLine(line: string): Color[] {
  return []
  .concat(regex.HEX(line))
  .concat(regex.RGB(line))
  .concat(regex.RGBA(line))
  .filter(isTruthy);
}

/**
 * Extract the colors from a given "file" or string of text.
 *
 * @param {string} blob - A given blob of text, generally a file's contents.
 */
export default function getColors(blob: string): Set<Color> {
  return new Set(
    toLines(blob)
    .flatMap(getColorsFromLine)
  );
}
