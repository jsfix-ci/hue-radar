/**
 * Split a given string into an array of lines.
 *
 * @param {string} text - A given multi-line string
 */
export default function toLines(text: string): string[] {
  return text.split('\n');
}
