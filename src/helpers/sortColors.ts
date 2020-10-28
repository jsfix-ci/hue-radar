import { distance, deltaE } from 'chroma-js';
import type { Color, ColorsReport, SortAlgorithm } from '../types';

/**
 * Return a color difference compare function, based on an anchor color.
 *
 * @param {string} anchor - The anchor color to compare against.
 */
function deltaWithAnchor(anchor: Color, sortAlgorithm: SortAlgorithm): (compareColor: Color) => number {
  return function getColorDelta(compareColor: Color): number {
    return sortAlgorithm === 'deltaE'
      ? deltaE(anchor, compareColor)
      : distance(anchor, compareColor);
  };
}

const ANCHOR_COLOR = '#fff';

/**
 * Sorts the colors (roughly) from lightest to darkest.
 *
 * @param {ColorsReport} colorsReport - The formatted colorsReport.
 */
export default function sortColors(colorsReport: ColorsReport, sortAlgorithm: SortAlgorithm): ColorsReport {
  const getColorDelta = deltaWithAnchor(ANCHOR_COLOR, sortAlgorithm);

  //  Function to be passed to Array.sort
  function byColorDifference(aColor: Color, bColor: Color): number {
    return getColorDelta(aColor) - getColorDelta(bColor);
  }

  //  Reduces the sorted array back to a ColorsReport.
  function sortedToReport(sortedReport: ColorsReport, color: Color): ColorsReport {
    return {
      ...sortedReport,
      [color]: colorsReport[color],
    };
  }

  return Object.keys(colorsReport)
    .sort(byColorDifference)
    .reduce(sortedToReport, {});
}
