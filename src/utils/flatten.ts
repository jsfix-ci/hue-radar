/**
 * Flattens an array one level.
 *
 * @param {any[]} arr - A multi-dimensional array.
 */
export default function flatten(arr: any[]): any[] {
  return arr.reduce((acc, element) => [...acc, ...element]);
}
