import { program as commander } from 'commander';
import { normalizeColor, sortColors, parseSortAlgorithm } from '../helpers';
import { flatten } from '../utils';
import type { ReportEntry, ColorsReport } from '../types';


/**
 * Formats the individual file report entries into a unified ColorsReport.
 *
 * @param {ReportEntry[][]} fileReports - Array of file report entries (see lineReader module).
 */
export default function formatReports(fileReports: ReportEntry[][], program: commander.Command): ColorsReport {
  const colorsReport: ColorsReport = {};
  const discoveries = flatten<ReportEntry>(fileReports);
  discoveries.forEach(({ colors, ...entry }) => {
    [...colors].forEach((colorString: string) => {
      const color = normalizeColor(
        colorString,
        program.convertToHex as boolean,
      );
      colorsReport[color] = colorsReport[color]?.length > 0 // eslint-disable-line @typescript-eslint/no-unnecessary-condition -- Conditional is needed because colorsReport[color] may not exist yet.
        ? [
          ...colorsReport[color],
          entry,
        ]
        : [entry];
    });
  });
  return sortColors(colorsReport, parseSortAlgorithm(program.sortAlgorithm));
}
