import type { SortAlgorithm } from '../types';

//  TODO: move this to a constants file
const SORT_ALGORITHM: { [K: string]: SortAlgorithm } = {
  DISTANCE: 'distance',
  DELTA: 'deltaE',
};

/**
 * Ensures that the program.sortAlgorithm is valid.
 *
 * @param {SortAlgorithm} sortAlgorithm - The program.sortAlgorithm.
 */
export default function parseSortAlgorithm(sortAlgorithm: SortAlgorithm | string | undefined = SORT_ALGORITHM.DISTANCE): SortAlgorithm {
  return sortAlgorithm !== SORT_ALGORITHM.DISTANCE && sortAlgorithm !== SORT_ALGORITHM.DELTA
    ? SORT_ALGORITHM.DISTANCE
    : sortAlgorithm;
}
