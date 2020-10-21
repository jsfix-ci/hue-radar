/**
 * Flattens an array one level.
 *
 * @param {any[][]} arr - A single-level multi-dimensional array.
 */
export default function flatten<T>(array: T[][]): T[] {
  return array.reduce<T[]>((accumulator: T[], element: T[]) => [
    ...accumulator,
    ...element,
  ], []);
}
