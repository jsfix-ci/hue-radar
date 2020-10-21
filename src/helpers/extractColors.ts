import colorRegex from './colorRegex';
import { isTruthy, toLines } from '../utils';
import type { Color } from '../types';

/**
 * Extract the colors from a given "line" or string of text.
 *
 * @param {string} line - A given "line" or string of text
 */
export function getColorsFromLine(line: string): Color[] {
  return []
  .concat(colorRegex.HEX(line))
  .concat(colorRegex.RGB(line))
  .concat(colorRegex.RGBA(line))
  .filter(isTruthy);
}

/**
 * Extract the colors from a given "blob" or string of text (ususally a line).
 *
 * @param {string} blob - A given blob of text, generally a file's contents.
 */
export default function extractColors(blob: string): Set<Color> {
  return new Set(
    toLines(blob)
    .flatMap(getColorsFromLine)
  );
}
