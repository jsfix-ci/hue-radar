/**
 * Returns the first item in an array.
 *
 * @param {T[]} list - A given array.
 */
export function head<T>(list: T[]): T {
  return list[0];
}

/**
 * Returns the last item in an array.
 *
 * @param {T[]} list - A given array.
 */
export function tail<T>(list: T[]): T {
  return list[list.length - 1];
}

/**
 * Flattens an array one level.
 *
 * @param {any[][]} arr - A single-level multi-dimensional array.
 */
export function flatten<T>(array: T[][]): T[] {
  return array.reduce<T[]>((accumulator: T[], element: T[]) => [
    ...accumulator,
    ...element,
  ], []);
}
