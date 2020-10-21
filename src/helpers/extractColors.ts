import colorRegex from './colorRegex';
import type { ColorMatcher } from './colorRegex';
import { isTruthy, toLines } from '../utils';
import type { Color } from '../types';

/**
 * Extract the colors from a given "line" or string of text.
 *
 * @param {string} line - A given "line" or string of text
 */
export function getColorsFromLine(line: string): Color[] {
  const callWithLine = (fn: ColorMatcher): Color => fn(line);
  return Object.values(colorRegex)
    .map(callWithLine)
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
      .flatMap(getColorsFromLine),
  );
}
